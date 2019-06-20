<template>
    <div>
        <comp-url>DataEntry / Main</comp-url>
        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;Confirmatory Reference #:
            </label>
            <b-input ref="confirmatory_reference_number" placeholder="Scan /Enter Confirmatory Reference #" v-model="confirmatory_reference_number" :state="confirmatory_reference_number_state"></b-input>
            <div slot="append" class="text-center mt-1 ml-3" v-if="confirmatory_reference_number_busy">
                <b-img src="./img/loading-circle.gif" width="27" height="27"></b-img>
            </div>
            <b-form-invalid-feedback>
                Referral not found
            </b-form-invalid-feedback>
        </b-input-group>

        <div class="form-group text-center" v-if="!referral">
            No records to display
        </div>

        <div v-if="referral">
            <b-card bg-variant="dark" text-variant="white" title="Cryobox Details" v-if="!referral.cryobox">
                <b-card-text>
                    <i class="fa fa-info-circle"></i> Cryobox Location not set
                </b-card-text>
                <b-button variant="primary" size="sm" v-b-modal.cryobox-selector>Set Cryobox Location</b-button>
            </b-card>

            <cryobox-selector />
        </div>

    </div>
</template>

<script>
import CryoboxSelector from './CryoboxDetails/Form'
export default {
    components : {CryoboxSelector},
    data(){
        return {
            confirmatory_reference_number : null,
            confirmatory_reference_number_state : null,
            confirmatory_reference_number_busy : false,
            referral : null,
        }
    },
    mounted(){
        this.$refs.confirmatory_reference_number.focus()
    },
    watch : {
        confirmatory_reference_number(){
            if(this.confirmatory_reference_number){
                this.fetchReferral()
            }
        }
    },
    methods : {
        fetchReferral : _.debounce(function(){
            this.confirmatory_reference_number_busy = true
            this.referral = null
            this.$emit('referralSet',null)
            this.$store.dispatch('fetchReferralbyCR',this.confirmatory_reference_number.toUpperCase()).then(response=>{
                this.confirmatory_reference_number_busy = false
                if(response){
                    this.referral = response
                    this.confirmatory_reference_number_state = true
                    this.$emit('referralSet',response)
                }else{
                    this.confirmatory_reference_number_state = false
                }
            })
        },500)
    }
}
</script>
