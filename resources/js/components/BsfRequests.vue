<template>
    <div>
        <h5>Referrals</h5>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Confirmatory Request', href: '#'},
            {text: 'Request Status', active :true}
        ]"></b-breadcrumb>

        <b-row>
            <b-col>
                <b-table
                    :fields="fields"
                    :items="items"
                    head-variant="dark"
                    striped
                    show-empty>

                    <template slot="empty">
                        No Referrals yet
                    </template>

                    <template slot="request_type" slot-scope="data">
                        {{data.item.donation.reactiveResults.join(' ')}}
                    </template>

                    <template slot="status" slot-scope="data">
                        {{calculateStatus(data.item)}}
                    </template>

                    <template slot="opts" slot-scope="data">
                        <b-button variant="warning" size="sm" @click="current = data.item"><i class="fa fa-search"></i></b-button>
                    </template>

                </b-table>

            </b-col>
            <b-col>
                <div v-if="current">
                    <b-input-group class='mb-3' size="sm">
                        <label class='input-group-text' slot='prepend'>
                            Donation ID:
                        </label>
                        <b-input placeholder='Donation ID' v-model='current.donation_id' readonly></b-input>
                    </b-input-group>

                    <b-input-group class='mb-3' size="sm">
                        <label class='input-group-text' slot='prepend'>
                            Request Type:
                        </label>
                        <b-input placeholder='Donation ID' :value="current.donation.reactiveResults.join(' ')" readonly></b-input>
                    </b-input-group>


                    <timeline :referral="current" :expanded="true" />
                    <case-identification-card :donor="current.donation.donor" :referral="current" />
                    <specimen-collection-card :referral="current" />
                    <blood-service-facility-card :facility="current.donation.facility" />
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import Timeline from './Timeline'
import CaseIdentificationCard from './ReferralCard/CaseIdentificationCard'
import SpecimenCollectionCard from './ReferralCard/SpecimenCollectionCard'
import BloodServiceFacilityCard from './ReferralCard/BloodServiceFacilityCard'
export default{
    components : {Timeline,CaseIdentificationCard,SpecimenCollectionCard,BloodServiceFacilityCard},
    data(){
        return {
            fields : [
                {key:'donation_id' , label : 'Donation ID', sortable : true},
                {key:'request_type' , label : 'Type of Request'},
                {key:'shipped_dt' , label : 'Date Sent'},
                {key:'status'},
                {key:'opts' , label : ''},
            ],
            items : [],
            user : this.$session.get('user'),
            current : null,
        }
    },
    mounted(){
        this.refreshList()
    },
    methods : {
        async refreshList(){
            let req = await this.$store.dispatch('fetchBSFReferrals',{facility_cd : this.user.facility_cd})
            console.log(req)
            this.items = req.data
        },
        calculateStatus(referral){
            let {cryobox,received_by,shipped_dt} = referral
            
            if(cryobox){
                return "On Process"
            }else if(received_by){
                return "Received"
            }else if(shipped_dt){
                return "Shipped"
            }
        }
    }
}
</script>