<template>
    <div>
        <!-- REQUEST DETAILS SECTIONS -->
        <h5 class="text-info">Specimen Collection</h5>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-calendar'></i>&nbsp;
                Date Collected:
            </label>
            <b-input placeholder='Date Collected' v-model='referral.donation.donation_dt' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-tint'></i>&nbsp;
                Blood Type:
            </label>
            <b-input placeholder='Blood Type' v-model='referral.donation.blood_type' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-user'></i>&nbsp;
                Type of Donor:
            </label>
            <b-input placeholder='Type of Donor' v-model='referral.donation.donation_type' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm" v-if="referral.donation.donor">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-tint'></i>&nbsp;
                Donation Freq:
            </label>
            <b-input placeholder='Donation Freq' v-model='referral.donation.donor.frequency' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm" v-if="referral.donation.donor">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-calendar'></i>&nbsp;
                Last Donation:
            </label>
            <b-input placeholder='Last Donation' v-model='referral.donation.donor.prev_donation' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-calendar'></i>&nbsp;
                Date Shipped:
            </label>
            <b-input placeholder='Date Shipped' v-model='referral.shipping_dt' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-truck'></i>&nbsp;
                Courier / Trucking:
            </label>
            <b-input placeholder='Courier / Trucking' v-model='trucking' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-tint'></i>&nbsp;
                Request:
            </label>
            <b-input placeholder='Request' v-model='referral.donation.reactiveResults' readonly></b-input>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-tint'></i>&nbsp;
                Specimen Type:
            </label>
            <b-input placeholder='Request' v-model='specimens' readonly></b-input>
        </b-input-group>
    </div>
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