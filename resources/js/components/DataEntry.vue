<template>
    <div>
        <comp-url>DataEntry</comp-url>
        <b-breadcrumb :items="[
            {text: 'Data Entry', active: true},
        ]"></b-breadcrumb>
        
        <b-row class="mt-3">
            <b-col sm="12" md="6" lg="6" xl="6">
                <data-entry @referralSet="setReferral"></data-entry>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
                <referral-card v-if="referral" :referral="referral"></referral-card>
                <timeline v-if="referral" :referral="referral" class="mb-3"></timeline>
            </b-col>
        </b-row>
        
        
    </div>    
</template>

<script>
import ReferralCard from './ReferralCard/ReferralCard'
import Timeline from './Timeline'
import DataEntry from './DataEntry/DataEntryDashboard'

export default {
    components: {ReferralCard,Timeline,DataEntry},
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
