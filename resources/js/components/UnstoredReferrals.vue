<template>
    <div>
        <b-breadcrumb :items="['Referrals','Unstored Referrals']"></b-breadcrumb>
        <b-table 
        :fields="fields"
        :items="unstored_referrals"
        striped
        class="text-center align-middle"
        show-empty
        small
        bordered
        >
            <template slot="facility_name" slot-scope="data">
                {{data.item.donation.facility.facility_name}}
            </template>
            <template slot="opts" slot-scope="data">
                <b-button variant="success" size="sm" v-b-modal.set-v-b-modal.cryobox-selector @click="current=data.item"><i class="fa fa-cube"></i> Set Cryobox Details</b-button>
            </template>
            <template slot="empty">
                No more unstored referrals 
            </template>
        </b-table>

        <cryobox-selector v-if="current" :pcryobox="current.cryobox" :referral="current" @savePressed="setCryobox" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CryoboxSelector from './Receive/CryoboxDetails/CryoboxSelector'
export default {
    components : {CryoboxSelector},
    computed : {
        ...mapGetters(['unstored_referrals']),
    },
    data(){
        return {
            fields : [
                {key:'confirmatory_reference_number',label:'Confirmatory Reference Number',sortable : true},
                {key:'donation_id',sortable:true},
                {key:'facility_name',sortable:true},
                {key:'opts',label: ''}
            ],
            current : null,
        }
    },
    methods : {
        async setCryobox(box){
            let referral = _.extend(this.current,{confirmatory_reference_number : this.confirmatory_reference_number ,cryobox : box})
            this.referral = null
            this.$emit('referralSet',null)
            this.referral = referral
            setTimeout(f=>{
                this.$emit('referralSet',referral)
            },1)
            let request = await this.$store.dispatch('setReferralCryobox',this.current)
            await this.$store.dispatch('fetchUnstoredReferrals')
            await this.$store.dispatch('fetchCryoboxes')
            this.$bvModal.hide('cryobox-selector1')
        }
    }
}
</script>