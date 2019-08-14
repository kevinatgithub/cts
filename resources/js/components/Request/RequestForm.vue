<template>
    <div>
        <comp-url>Request / RequestForm</comp-url>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                 <i class="fa fa-search"></i>&nbsp;
                    Donation ID:
            </label>
            <b-input placeholder="Scan /Enter Donation ID" v-model="donation_id" :state="donation_id_valid"></b-input>
            <div slot="append" class="text-center mt-1 ml-3" v-if="donationIDBusy">
                <b-img src="./img/loading-circle.gif" width="27" height="27"></b-img>
            </div>
            <b-form-invalid-feedback>
                Donation ID not found
            </b-form-invalid-feedback>
        </b-input-group>

        <h5 class="text-info mt-3">Specimen Details</h5>

        <b-form-group class="mt-3" v-if="donation">

            <!-- DATE COLLECTED -->
            <b-input-group class='mb-3' size="sm">
                <label class='input-group-text' style="width:140px;" slot='prepend'>
                    <i class='fa fa-calendar'></i>&nbsp;
                    Date Collected:
                </label>
                <b-input aria-label='' placeholder='' v-model='donation.donation_dt' disabled></b-input>
            </b-input-group>

            <!-- BLOOD TYPE -->
            <b-input-group class="mb-3" size="sm">
                <label class="input-group-text" style="width:140px;" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;
                    Blood Type:
                </label>
                <b-input aria-label="BloodType" placeholder="Scan /Enter Donation ID" v-model="donation.blood_type" disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3' size="sm">
                <label class='input-group-text' style="width:140px;" slot='prepend'>
                    <i class='fa fa-user'></i>&nbsp;
                    Type of Donor:
                </label>
                <b-input placeholder='Type of donor' v-model='donation.donation_type' disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3' size="sm" v-if="donation.donor">
                <label class='input-group-text' style="width:140px;" slot='prepend'>
                    <i class='fa fa-user'></i>&nbsp;
                    Donation Frequency:
                </label>
                <b-input placeholder='Donation Frequency' v-model='donation.donor.frequency' disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3' size="sm" v-if="donation.donor">
                <label class='input-group-text' style="width:140px;" slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    Last Donation:
                </label>
                <b-input placeholder='Last Donation' v-model='donation.donor.prev_donation' disabled></b-input>
            </b-input-group>

            <!-- REACTIVE FOR -->
            <b-input-group class='mb-3' size="sm">
                <label class='input-group-text' style="width:140px;" slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    Reactive for:
                </label>
                <b-input aria-label='BloodType' placeholder='Scan /Enter Donation ID' v-model='reactive_results' disabled></b-input>
            </b-input-group>
            
            <!-- BSF TEST DETAILS  -->
            <bsf-protocol v-if="donation" :referral="referral" @reportCompletion="checkTestCompletion" />

            <!-- SPECIMEN -->
            <b-form-group>
                <label for="">Specimen Type</label>
                <b-form-checkbox-group title="Specimen Type" v-model="specimen">
                    <b-row >
                        <b-col v-for="s in specimens" :key="s.id" cols="6"><b-form-checkbox :value="s.id">{{s.name}}</b-form-checkbox></b-col>
                    </b-row>
                </b-form-checkbox-group>
            </b-form-group>

            <h5 class="text-info mt-3">Other Details</h5>

            <!-- COURIER MODE -->
            <b-form-group>
                <b-form-radio-group title="Courier Details" v-model="courierMode">
                    <b-form-radio value="Hand Carry">Hand Carry</b-form-radio>
                    <b-form-radio value="Courier">Courier</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <!-- COURIER DETAILS -->
            <b-row>
                <b-col v-show="courierMode == 'Hand Carry'">
                    <!-- IF HAND CARRY -->
                    <b-input-group class="mb-3" size="sm">
                        <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                            <i class="fa fa-user"></i>&nbsp;
                            Person in charge:
                        </label>
                        <b-input placeholder="First Name" v-model="courier.fname"></b-input>
                        <b-input placeholder="Middle Name" v-model="courier.mname"></b-input>
                        <b-input placeholder="Last Name" v-model="courier.lname"></b-input>
                    </b-input-group>
                    <b-input-group class="mb-3" size="sm">
                        <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                            <i class="fa fa-phone"></i>&nbsp;
                            Contact Number:
                        </label>
                        <b-input placeholder="Contact Number" v-model="courier.contact_no"></b-input>
                    </b-input-group>
                </b-col>

                <b-col v-show="courierMode == 'Courier'">
                    <!-- IF COURIER -->
                    <b-input-group class="mb-3" size="sm">
                        <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                            <i class="fa fa-truck"></i>&nbsp;
                            Select Courier:
                        </label>
                        <b-form-select v-model="courier.provider" :options="couriers"></b-form-select>
                    </b-input-group>
                    <b-input-group class="mb-3" size="sm">
                        <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                            <i class="fa fa-id-card"></i>&nbsp;
                            Reference Number:
                        </label>
                        <b-input placeholder="Referenence Number" v-model="courier.reference_no"></b-input>
                    </b-input-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-input-group class="mb-3" size="sm">
                        <label for="" class="input-group-text" slot="prepend">
                            <i class="fa fa-truck"></i>&nbsp;Date Shipped:
                        </label>
                        <b-input placeholder="Date Shipped" v-model="shipped_dt" type="date"></b-input>
                    </b-input-group>
                </b-col>
            </b-row>

            <!-- SUBMIT -->
            <b-row class="mt-3">
                <b-col cols="8">
                    <b-button @click="confirmSubmit" block variant="success" title="Click submit request for confirmatory testing to ritm" :disabled="!formValid || saving"><i class="fa fa-paper-plane"></i>&nbsp;SEND REQUEST</b-button>
                </b-col>
                <b-col cols="4" v-if="saving" class="mt-1">
                    <b-img src="./img/loading-circle.gif" width="25"></b-img> Saving..
                </b-col>
            </b-row>

        </b-form-group>

        <div class="text-center" v-if="!donation">
            No records to display
        </div>
        
        <b-modal id="confirm" header-bg-variant="info" header-text-variant="light" title="Submit Request" @ok="save">
            Do you wan't to submit the confirmatory request?
        </b-modal>

        <b-modal id="success" header-bg-variant="success" header-text-variant="light" title="Request Submitted!" ok-only>
            The confirmatory request has been submitted!
        </b-modal>
    </div>
</template>

<script>
import _ from 'lodash'
import BsfProtocol from '../DataEntry/Results/ResultEntry/BsfProtocol/BsfProtocol'
let lot = {
    lot_no: null,   optical_density : null, cutoff_value : null, interpretation : null, date_tested: null
}
let bsf_test_kit = {
    reagent : null, 
    lots : [
        _.extend(_.cloneDeep(lot),{id : 0}),
        _.extend(_.cloneDeep(lot),{id : 1}),
        _.extend(_.cloneDeep(lot),{id : 2}),
    ]
}

export default {
    components : {BsfProtocol},
    data(){
        return{
            donationIDBusy : false,
            donation_id : null,
            donation_id_valid : null,
            donation : null,
            specimen : null,
            courierMode : null,
            courier : {
                fname : null, mname : null, lname : null, contact_no : null,
                provider : null, reference_no : null,
            },
            shipped_dt : null,
            saving : false,
            referral : {
                results : {
                    bsf : {
                        machine : null,
                        bsf_mt : null,
                        hiv_license : null,
                        kits : [
                            _.extend(_.cloneDeep(bsf_test_kit),{id : 0}),
                            _.extend(_.cloneDeep(bsf_test_kit),{id : 1}),
                            _.extend(_.cloneDeep(bsf_test_kit),{id : 2}),
                        ]
                    },
                }
            },
            test_complete : false,
        }
    }, // end data

    computed : {
        
        specimens(){
            let specimens = this.$store.getters.specimens
            specimens.forEach(s=>{
                s.value = s.id
                s.text = s.name
            })
            return specimens
        },

        couriers(){
            let couriers = this.$store.getters.couriers
            couriers.forEach(c=>{
                c.value = c.id
                c.text = c.name
            })
            return couriers
        },

        reactive_results(){
            if(this.donation){
                return this.donation.reactiveResults.join(' ')
            }
        },

        formValid(){
            let {specimen , 
                courier : {fname,mname,lname,contact_no,provider,reference_no}, shipped_dt,
                courierMode} = this

            if(specimen === null){
                return false
            }

            if(!shipped_dt){
                return false
            }

            if(!this.test_complete){
                return false
            }

            if(courierMode == 'Hand Carry'){
                return fname && mname && lname && contact_no
            }else if(courierMode == 'Courier'){
                return (provider !== null) && reference_no
            }else{
                return false
            }

            return true
        },
    },

    methods : {
        fetchDonation : _.debounce(function(){
            this.donation = false
            this.$emit('donationSet', null)
            this.donationIDBusy = true
            this.donation_id_valid = null
            this.$store.dispatch('fetchDonation',{donation_id : this.donation_id}).then(({data})=>{
                this.donationIDBusy = false
                if(!data){
                    this.donation_id_valid = false
                    return
                }else{
                    this.donation_id_valid = true
                    this.donation = data
                    this.$emit('donationSet',data)
                }
            })
        },1000),

        confirmSubmit(){
            this.$bvModal.show('confirm')
        },

        save(){
            this.saving = true
            let user = this.$store.getters.user
            
            this.$store.dispatch('newReferral',{
                donation : this.donation,
                courier : this.courier,
                courierMode : this.courierMode,
                donation_id : this.donation.donation_id,
                specimen : this.specimen,
                request_by : user,
                created_dt : Date.now(),
                shipped_dt : this.shipped_dt,
                results : {
                    bsf : this.referral.results.bsf,
                    nrl : {
                        hiv : [],
                        hbv : [],
                        hcv : [],
                        mal : [],
                        syp : [],
                    },
                }
            }).then(r=>{
                this.saving = false
                this.donation_id = null
                this.donation = null
                this.$emit('donationSet',null)
                this.courier = {
                    fname : null, mname : null, lname : null, provider : null, reference_no : null,
                }
                this.specimen = null
                this.courierMode = null
                this.donation_id_valid = null
                this.$bvModal.show('success')
            })
        },

        checkTestCompletion(p){
            this.test_complete = p >= 51
        }
        
    },

    watch : {
        donation_id(){
            if(this.donation_id){
                this.fetchDonation()
            }
        },

        referral : {
            handler : function(r){
                let {results : {bsf}} = r
                this.test_complete = !_.some(bsf,_.isEmpty)
            },
            deep : true
        }
    }
}
</script>

<style>

</style>
