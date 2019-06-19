<template>
    <b-card no-body header-bg-variant="light">
        <template slot="header">
            <div v-b-toggle.referral-card-3 role="tab" style="cursor:pointer;">
                <i class="fa fa-tint"></i> Specimen Collection
            </div>
        </template>
        <b-collapse id="referral-card-3" accordion="referral-card" role="tabpanel">
            <b-card-body>
                <b-row>
                    <b-col cols='4' class='text-right'>Date Collected &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.donation_dt}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Blood Type &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.blood_type}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Type of Donor &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.donation_type}}</b-col>
                </b-row>

                <b-row v-if="referral.donation.donor">
                    <b-col cols='4' class='text-right'>Donation Freq &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.donor.frequency}}</b-col>
                </b-row>

                <b-row v-if="referral.donation.donor">
                    <b-col cols='4' class='text-right'>Last Donation &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.donor.prev_donation}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Date Shipped &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.shipping_dt}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Courier / Trucking &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{trucking}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Request &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{referral.donation.reactiveResults.join(' , ')}}</b-col>
                </b-row>

                <b-row>
                    <b-col cols='4' class='text-right'>Specimen Type &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{specimens.join(' , ')}}</b-col>
                </b-row>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
export default {
    props : ['referral'],
    computed : {
        trucking(){
            if(this.referral.courierMode == 'Hand Carry'){
                let {fname,mname,lname, contact_no } = this.referral.courier
                return fname + " " + mname + " " + lname + " / " + contact_no
            }else{
                let {provider, reference_no} = this.referral.courier
                let courier = _.find(this.couriers,{id : provider})
                return courier.name + " / " + reference_no
            }
        },
        couriers(){
            return this.$store.getters.couriers
        },
        storeSpecimens(){
            return this.$store.getters.specimens
        },
        specimens(){
            let specimens = _.filter(this.storeSpecimens,s=>{
                return _.includes(this.referral.specimen,s.id)
            })

            return specimens.map(s=> {return s.name})
        }
    }
}
</script>