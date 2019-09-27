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


        <b-form-group class="mt-3" v-if="referral">
            <b-card v-if="referral.reject_reason.length" bg-variant="dark" text-variant="white">
                <i class="fa fa-warning"></i> This referral has been rejected because of {{referral.reject_reason}}
                <br>
                <b-button class="mt-3" variant="light" size="sm"><i class="fa fa-send"></i> Send Rejection Report</b-button>
                <router-link to="rejections">
                    <b-button class="mt-3" variant="success" size="sm"><i class="fa fa-list"></i> View Rejections</b-button>
                </router-link>
            </b-card>
            <div v-if="!referral.reject_reason.length">
                <b-input-group class="mb-3" size="sm">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-pencil"></i>&nbsp;Confirmatory Request #:
                    </label>
                    <b-input placeholder="Scan /Enter Confirmatory Request #" v-model="confirmatory_reference_number" :disabled="form_disabled"></b-input>
                </b-input-group>

                <b-input-group class="mb-3" size="sm">
                    <b-col sm="2">
                        &nbsp;
                    </b-col>
                    <b-form-checkbox v-model="accept" :value="true" :unchecked-value="false" :disabled="form_disabled">
                        In good condition
                    </b-form-checkbox>
                </b-input-group>
                <b-input-group class="mb-3" size="sm">
                    <b-col sm="2">
                        &nbsp;
                    </b-col>
                    <b-form-checkbox v-model="contested" :value="true" :unchecked-value="false" :disabled="form_disabled">
                        Contested
                    </b-form-checkbox>
                </b-input-group>

                <!-- <cryobox-card class="mt-3" :cryobox="referral.cryobox" @editPressed="$bvModal.show('cryobox-selector')"></cryobox-card> -->
                <b-button variant="dark" class="offset-2" v-b-modal.cryobox-selector>Set Cryobox Location</b-button>

                <cryobox-selector :pcryobox="referral.cryobox" :referral="referral" @savePressed="setCryobox" />

                <b-input-group class="mt-3" size="sm">
                    <label for="" class="col-sm-2"><strong>Remarks:</strong></label>
                    <b-form-textarea no-resize placeholder="Type-in some remarks" rows="6" v-model="remarks" required :disabled="form_disabled"></b-form-textarea>
                </b-input-group>

                <b-row class="mt-5">
                    <b-col>
                        <b-button variant="danger" block :disabled=" form_disabled || (reject_busy || receive_busy)" v-b-modal.rejectModal>
                            <span v-if="reject_busy">
                                <i class="fa fa-spinner"></i>&nbsp;REJECTING..
                            </span>
                            <span v-if="!reject_busy">
                                <i class="fa fa-trash"></i>&nbsp;REJECT
                            </span>
                        </b-button>
                    </b-col>
                    <b-col>
                        <b-button variant="success" block title="Accept the Blood sample" :disabled="form_disabled || !confirmatory_reference_number_valid || (reject_busy || receive_busy)" v-b-modal.confirmReceive>
                            <span v-if="receive_busy">
                                <i class="fa fa-spinner"></i>&nbsp;ACCEPTING..
                            </span>
                            <span v-if="!receive_busy">
                                <i class="fa fa-check"></i>&nbsp;ACCEPT
                            </span>
                        </b-button>
                    </b-col>
                </b-row>
            </div>

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
                <b>Reject Reasons</b><br>
            </b-input-group>
            <b-input-group class="mb-3">
                <b-form-checkbox class="col-sm-6 mt-3" v-model="reject_reason" v-for="i in reject_options" :key="i" :value="i">{{i}}</b-form-checkbox>
            </b-input-group>

            <!-- <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-pencil"></i>&nbsp;
                    Reject Reasons
                </label>
                <b-form-select v-model="reject_reason" :options="reject_options"></b-form-select>
                <b-button slot="append" v-b-modal.reject-reasons-settings><i class="fa fa-cog"></i></b-button>
            </b-input-group> -->

            <b-modal id="reject-reasons-settings" header-bg-variant="dark" header-text-variant="white" hide-footer title="Reject Reasons">
                <reject-reasons />
            </b-modal>

            <template slot="modal-footer">
                <b-button variant="primary" v-b-modal.confirmReject :disabled="!reject_reason">SUBMIT</b-button>
            </template>
        </b-modal>
        
        <b-modal id="confirmReceive" header-bg-variant="info" header-text-variant="light" title="Receive Referral" @ok="receive">
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
import CryoboxCard from './CryoboxDetails/CryoboxCard'
import CryoboxSelector from './CryoboxDetails/CryoboxSelector'
import RejectReasons from '../Administration/References/RejectReasons'
import { mapGetters } from 'vuex';

export default {
    components : {Verifier, CryoboxCard, CryoboxSelector, RejectReasons},
    data() {
        return{
            donation_id : null,
            donation_id_state : null,
            donation_id_busy : false,
            referral : null,
            confirmatory_reference_number : null,
            form_disabled : false,
            contested : false,
            accept : null,
            remarks : null,
            process_mode : null,
            reject_reason : [],
            receive_busy : false,
            reject_busy : false,
        }
    },
    methods: {
        fetchReferral : _.debounce(function(){
            this.donation_id_busy = true
            this.referral = null
            this.$emit('referralSet',null)
            this.$store.dispatch('fetchReferral',this.donation_id.toUpperCase()).then(({data})=>{
                this.donation_id_busy = false
                if(data){
                    if(data.received_by){
                        this.form_disabled = true
                    }
                    this.referral = data
                    this.donation_id_state = true
                    this.$emit('referralSet',data)
                }else{
                    this.donation_id_state = false
                }
            })
        },500),
        setCryobox(box){
            let referral = _.extend(this.referral,{confirmatory_reference_number : this.confirmatory_reference_number ,cryobox : box})
            this.referral = null
            this.$emit('referralSet',null)
            this.referral = referral
            setTimeout(f=>{
                this.$emit('referralSet',referral)
            },1)
        },
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
                this.$store.dispatch('fetchUnstoredReferrals')
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
        ...mapGetters(['reject_reasons']),
        reject_options(){
            if(!this.reject_reasons){
                return []
            }else{
                return this.reject_reasons.map(r=>{
                    return r.name
                })
            }
        },        
        confirmatory_reference_number_valid(){
            return this.confirmatory_reference_number
        },
        payload(){
            if(!this.referral){
                return
            }
            let {referral,confirmatory_reference_number,contested,remarks,reject_reason} = this
            _.extend(referral,{
                confirmatory_reference_number : confirmatory_reference_number ? confirmatory_reference_number.toUpperCase() : null,
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
                this.accept = !this.referral.reject_reason ? true : false
                this.contested = this.referral.contested
                this.remarks = this.referral.remarks
            }
        }
    }
}
</script>

<style>

</style>
