<template>
    <div>
        <comp-url>Receive</comp-url>
        <!-- <h3 class="text-primary">Receive Blood Sample</h3>
        <hr> -->
        <b-breadcrumb :items="[
            {text: 'Receive Blood Sample', active: true},
        ]"></b-breadcrumb>
        
        <b-row class="mt-3">
            <b-col sm="12" md="6" lg="6" xl="6">
                <receive-form @referralSet="setReferral"></receive-form>
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
import ReceiveForm from './Receive/ReceiveForm'

export default {
    components: {ReferralCard,Timeline,ReceiveForm},
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
