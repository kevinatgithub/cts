<template>
    <div>
        <comp-url>Receive / DetailsForm</comp-url>
        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;Donation ID:
            </label>
            <b-input placeholder="Scan /Enter Donation ID" v-model="donation_id" :state="donation_id_state"></b-input>
            <div slot="append" class="text-center mt-1 ml-3" v-if="donation_id_busy">
                <b-img src="./img/loading-circle.gif" width="27" height="27"></b-img>
            </div>
            <b-form-invalid-feedback>
                Referral not found
            </b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-pencil"></i>&nbsp;Confirmatory Request #:
            </label>
            <b-input placeholder="Scan /Enter Confirmatory Request #" v-model="confirmatory_reference_number"></b-input>
        </b-input-group>

        <!-- REQUEST DETAILS SECTIONS -->
        <h5 class="text-info">Request Details</h5>
        <b-form-group class="mt-3" v-if="referral">
            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-building"></i>&nbsp;Requesting Facility:
                </label>
                <b-input placeholder="" v-model="referral.donation.facility.facility_name" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-user"></i>&nbsp;Requested By:
                </label>
                <b-input placeholder="" v-model="referral.request_by.name" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-user"></i>&nbsp;Position:
                </label>
                <b-input placeholder="" v-model="referral.request_by.position" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-calendar"></i>&nbsp;Date of Request:
                </label>
                <b-input placeholder="" v-model="referral.created_dt" disabled></b-input>
            </b-input-group>

            <!-- BLOOD SAMPLE DETAILS -->
            <h5 class="text-info mt-4">Blood Sample Details</h5>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Specimen #:
                </label>
                <b-input placeholder="" v-model="referral.specimen.name" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Blood Type:
                </label>
                <b-input placeholder="" v-model="referral.donation.blood_type" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Reactive For:
                </label>
                <b-input placeholder="" v-text="referral.donation.reactive.reactiveResults.join(' ')" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <b-col sm="2">
                    &nbsp;
                </b-col>
                <b-form-checkbox v-model="accept" :value="true" :unchecked-value="false">
                    In good condition
                </b-form-checkbox>
            </b-input-group>

            <b-input-group class="mt-3">
                <label for="" class="col-sm-2"><strong>Remarks:</strong></label>
                <b-form-textarea placeholder="Type-in some remarks" rows="6" v-model="remarks" required></b-form-textarea>
            </b-input-group>

            <b-row class="mt-5">
                <b-col>
                    <b-button variant="danger" block :disabled="accept" v-b-modal.rejectModal>
                        <i class="fa fa-trash"></i>&nbsp;REJECT
                    </b-button>
                </b-col>
                <b-col>
                    <b-button variant="success" block title="Accept the Blood sample" :disabled="!accept">
                        <i class="fa fa-check"></i>&nbsp;ACCEPT
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
                <b-form-textarea placeholder="Type-in the reason for the rejection of the specimen" rows="8"></b-form-textarea>
            </b-input-group>

            <template slot="modal-footer">
                <b-button variant="primary">SUBMIT</b-button>
            </template>
        </b-modal>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            donation_id : null,
            donation_id_state : null,
            donation_id_busy : false,
            referral : null,
            confirmatory_reference_number : null,
        }
    },
    methods: {
        fetchReferral : _.debounce(function(){
            this.donation_id_busy = true
            this.$store.dispatch('fetchReferral',this.donation_id).then(response=>{
                this.donation_id_busy = false
                if(response){
                    this.referral = response
                    this.donation_id_state = true
                }else{
                    this.donation_id_state = false
                }
            })
        },500)
    }
}
</script>

<style>

</style>
