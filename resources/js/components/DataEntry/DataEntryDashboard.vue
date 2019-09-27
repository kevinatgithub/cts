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
            
            <b-card bg-variant="outline-danger" header-bg-variant="danger" header="Referral was Rejected" header-text-variant="white" class="mb-3" v-if="referral.reject_reason.length">
                <b-card-text>
                    <i class="fa fa-info-circle"></i>   This Referral was rejected
                </b-card-text>
            </b-card>

            <cryobox-card :cryobox="referral.cryobox" v-if="!referral.reject_reason" @editPressed="$bvModal.show('cryobox-selector')"></cryobox-card>

            <cryobox-selector :pcryobox="referral.cryobox" :referral="referral" @savePressed="setCryobox" />

            <results-menu v-if="!referral.reject_reason.length" :referral="referral" @resultSent="fetchReferral"></results-menu>
        </div>

    </div>
</template>

<script>
import CryoboxSelector from './CryoboxDetails/CryoboxSelector'
import CryoboxCard from './CryoboxDetails/CryoboxCard'
import ResultsMenu from './Results/ResultsMenu'
import {mapGetters} from 'vuex'

export default {
    components : {CryoboxSelector,CryoboxCard,ResultsMenu},
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
        if(this.on_watch){
            this.confirmatory_reference_number = this.on_watch.confirmatory_reference_number
        }
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
            this.$store.dispatch('fetchReferralbyCR',this.confirmatory_reference_number.toUpperCase()).then(({data})=>{
                this.confirmatory_reference_number_busy = false
                if(data){
                    this.referral = data
                    this.$store.dispatch('setReferralOnWatch',data)
                    this.confirmatory_reference_number_state = true
                    this.$emit('referralSet',data)
                }else{
                    this.confirmatory_reference_number_state = false
                }
            })
        },500),
        setCryobox(box){
            let referral = _.extend(this.referral,{cryobox : box})
            this.referral = null
            this.$emit('referralSet',null)
            this.referral = referral
            setTimeout(f=>{
                this.$emit('referralSet',referral)
            },1)
        }
    },
    computed : {
        ...mapGetters(['on_watch'])
    }
}
</script>
