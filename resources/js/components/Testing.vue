<template>
    <div>
        <comp-url>Testing</comp-url>
        <h3 class="text-primary">Confirmatory Test</h3>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Confirmatory Test', active: true},
        ]"></b-breadcrumb>

        <b-row class="mt-3">
            <b-col>
                <test-form @referralSet="setReferral"></test-form>
            </b-col>
            <b-col>
                <referral-card ></referral-card>test
                <timeline v-if="referral" :referral="referral"></timeline>
            </b-col>
        </b-row>
        
    </div>    
</template>

<script>
import Timeline from './Timeline'
import ReferralCard from './ReferralCard/ReferralCard'
import TestForm from './Testing/Testform'
export default {
    components: {Timeline, ReferralCard, TestForm},
    data(){
        return {
            referral : null
        }
    },
    methods : {
        setReferral(referral){
            this.referral = referral
        }
    }
}
</script>

<style>

</style>
