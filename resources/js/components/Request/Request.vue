<template>
    <div>
        <comp-url>Request</comp-url>
        <!-- <h3 class="text-primary">Confirmatory Request</h3> -->
        <!-- <hr> -->
        <b-breadcrumb :items="[
            {text: 'Confirmatory Request', href: '#'},
            {text: 'Send Confirmatory Request', active :true}
        ]"></b-breadcrumb>

        <b-row>
            <b-col sm="8">
                <request-form @donationSet="setDonation"></request-form>
            </b-col>
            <!-- <b-col>
                <donation-card v-if="donation" :donation="donation"></donation-card>
            </b-col> -->
        </b-row>
    </div>
</template>

<script>
import RequestForm from './RequestForm'
import DonationCard from '../ReferralCard/DonationCard'
export default {
    components : {DonationCard,RequestForm},
    data(){
        return {
            donation : null
        }
    },
    methods : {
        setDonation(donation){
            this.donation = donation
        }
    }
}
</script>

<style>

</style>
