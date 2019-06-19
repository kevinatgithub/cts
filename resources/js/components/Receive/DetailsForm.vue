<template>
    <div>
        <comp-url>Receive / DetailsForm</comp-url>
        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;Donation ID:
            </label>
            <b-input ref="donation_id" placeholder="Scan /Enter Donation ID" v-model="donation_id" :state="donation_id_state"></b-input>
            <div slot="append" class="text-center mt-1 ml-3" v-if="donation_id_busy">
                <b-img src="./img/loading-circle.gif" width="27" height="27"></b-img>
            </div>
            <b-form-invalid-feedback>
                Referral not found
            </b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-pencil"></i>&nbsp;Confirmatory Request #:
            </label>
            <b-input placeholder="Scan /Enter Confirmatory Request #" v-model="confirmatory_reference_number" :disabled="confirmatory_reference_number_disabled"></b-input>
        </b-input-group>

        <b-form-group class="mt-3" v-if="referral">

            <b-input-group class="mb-3" size="sm">
                <b-col sm="2">
                    &nbsp;
                </b-col>
                <b-form-checkbox v-model="accept" :value="true" :unchecked-value="false">
                    In good condition
                </b-form-checkbox>
            </b-input-group>
            <b-input-group class="mb-3" size="sm">
                <b-col sm="2">
                    &nbsp;
                </b-col>
                <b-form-checkbox v-model="contested" :value="true" :unchecked-value="false">
                    Contested
                </b-form-checkbox>
            </b-input-group>

            <b-input-group class="mt-3" size="sm">
                <label for="" class="col-sm-2"><strong>Remarks:</strong></label>
                <b-form-textarea placeholder="Type-in some remarks" rows="6" v-model="remarks" required></b-form-textarea>
            </b-input-group>

            <b-row class="mt-5">
                <b-col>
                    <b-button variant="danger" block :disabled="accept && (reject_busy || receive_busy)" v-b-modal.rejectModal>
                        <span v-if="reject_busy">
                            <i class="fa fa-spinner"></i>&nbsp;REJECTING..
                        </span>
                        <span v-if="!reject_busy">
                            <i class="fa fa-trash"></i>&nbsp;REJECT
                        </span>
                    </b-button>
                </b-col>
                <b-col>
                    <b-button variant="success" block title="Accept the Blood sample" :disabled="!accept || !confirmatory_reference_number_valid || (reject_busy || receive_busy)" v-b-modal.confirmReceive>
                        <span v-if="receive_busy">
                            <i class="fa fa-spinner"></i>&nbsp;ACCEPTING..
                        </span>
                        <span v-if="!receive_busy">
                            <i class="fa fa-check"></i>&nbsp;ACCEPT
                        </span>
                    </b-button>
                </b-col>
            </b-row>
        </b-form-group>

        <div class="form-group text-center" v-if="!referral">
            No records to display
        </div>

        <b-modal id="rejectModal" header-bg-variant="danger" header-text-variant="light">
            <template slot="modal-title">
                <h3 class="modal-title text-light lead" id="exampleModalCenterTitle">
                    <i class="fa fa-trash"></i>&nbsp;Reason for Rejection
                </h3>
            </template>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-pencil"></i>&nbsp;
                </label>
                <b-form-textarea v-model="reject_reason" placeholder="Type-in the reason for the rejection of the specimen" rows="8"></b-form-textarea>
            </b-input-group>

            <template slot="modal-footer">
                <b-button variant="primary" v-b-modal.confirmReject :disabled="!reject_reason">SUBMIT</b-button>
            </template>
        </b-modal>
        
        <b-modal id="confirmReceive" header-bg-variant="info" header-text-variant="light" title="Receive Referral" @ok="showVerifier">
            Confirm that this referral has been received?
        </b-modal>

        <b-modal id="confirmReject" header-bg-variant="danger" header-text-variant="light" title="Reject Referral" @ok="reject">
            Are you sure you wan't to reject this referral?
        </b-modal>

        <b-modal id="processDone" header-bg-variant="success" header-text-variant="light" :title="(process_mode == 'RECEIVE' ? 'Receive' : 'Reject') + ' Successful'" ok-only>
            <div v-if="process_mode == 'RECEIVE'">
                The confirmatory referral has been succesfully received!
            </div>
            <div v-if="process_mode == 'REJECT'">
                The confirmatory referral has been rejected!
            </div>
        </b-modal>

        <verifier @ok="receive" />
    </div>
</template>

<script>
import Verifier from '../App/Verifier'

export default {
    components : {Verifier},
    data() {
        return{
            donation_id : null,
            donation_id_state : null,
            donation_id_busy : false,
            referral : null,
            confirmatory_reference_number : null,
            contested : false,
            accept : null,
            remarks : null,
            process_mode : null,
            reject_reason : null,
            receive_busy : false,
            reject_busy : false,
        }
    },
    methods: {
        fetchReferral : _.debounce(function(){
            this.donation_id_busy = true
            this.referral = null
            this.$emit('referralSet',null)
            this.$store.dispatch('fetchReferral',this.donation_id.toUpperCase()).then(response=>{
                this.donation_id_busy = false
                if(response){
                    this.referral = response
                    this.donation_id_state = true
                    this.$emit('referralSet',response)
                }else{
                    this.donation_id_state = false
                }
            })
        },500),
        showVerifier(){
            this.$bvModal.hide('confirmReceive')
            this.$bvModal.show('verifier')
        },
        receive(){
            this.process_mode = 'RECEIVE'
            this.receive_busy = true
            this.$store.dispatch('receiveOrRejectReferral',this.payload)
            .then(response=>{
                this.$bvModal.show('processDone')
                this.receive_busy = false
                this.clearForm()
            })
        },
        reject(){
            this.process_mode = 'REJECT'
            this.reject_busy = true
            this.$store.dispatch('receiveOrRejectReferral',this.payload)
            .then(response=>{
                this.$bvModal.hide('rejectModal')
                this.$bvModal.show('processDone')
                this.reject_busy = false
                this.clearForm()
            })
        },
        clearForm(){
            this.referral = null
            this.confirmatory_reference_number = null
            this.$emit('referralSet',null)
            this.donation_id = null
            this.donation_id_state = null
            this.$refs.donation_id.focus()
        }
    },
    computed : {
        
        confirmatory_reference_number_valid(){
            return this.confirmatory_reference_number
        },
        confirmatory_reference_number_disabled(){
            if(this.referral){
                return this.referral.confirmatory_reference_number != null
            }
            return false
        },
        payload(){
            if(!this.referral){
                return
            }
            let {referral,confirmatory_reference_number,contested,remarks,reject_reason} = this
            _.extend(referral,{
                confirmatory_reference_number,
                contested,
                remarks,
                reject_reason,
                received_by : this.$store.getters.user,
                received_dt : new Date().toDateString(),
            })
            return referral
        }
    },
    watch : {
        donation_id(){
            if(this.donation_id){
                this.fetchReferral()
            }
        },
        referral(){
            if(this.referral){
                this.confirmatory_reference_number = this.referral.confirmatory_reference_number
            }
        }
    }
}
</script>

<style>

</style>
