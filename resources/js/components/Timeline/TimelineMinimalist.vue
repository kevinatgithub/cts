<template>
  <b-card header-bg-variant="dark" header-text-variant="white">
      <template slot="header">
          <i class="fa fa-calendar"></i> Timeline
      </template>
     <light-timeline :items="items" />
  </b-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props : ['referral'],
    computed : {
        ...mapGetters(['couriers','specimens']),
        items(){
            let timelines = [];
            if(!this.referral){
                return timelines
            }
            
            if(this.referral.courier){
                timelines.push(this.step1(this.referral))
            }

            if(this.referral.received_by){
                timelines.push(this.step2(this.referral))

                if(!this.referral.reject_reason){
                    timelines.push(this.step3(this.referral))
                }
            }

            return timelines
        }
    },
    methods : {
        getCourierName(courier_id){
            let courier =  _.find(this.couriers,{id:courier_id})
            if(!courier){
                return 
            }else{
                return courier.name
            }
        },
        step1(referral){
            let {referral : {donation,courier,courierMode,created_dt}} = this
            let courier_name = courierMode == 'Hand Carry' ? courier.name : this.getCourierName(courier.provider)
            let date = created_dt
            return {
                tag : date,  htmlMode : true, 
                content : "Specimen was shipped From<br>" + 
                         donation.facility.facility_name + " throught " + courier_name,
            }
        },
        step2(referral){
            let {referral : {received_by,received_dt}} = this
            let status = referral.reject_reason ? 'Rejected' : 'Accepted'
            let date = received_dt
            
            return {
                tag : date,  htmlMode : true, color : referral.reject_reason ? 'red' : 'green',
                content : "Specimen was "+status+" by<br>" + 
                         received_by.name,
            }
        },
        step3(referral){
            let {referral : {received_by,received_dt}} = this
            let status = referral.reject_reason ? 'Rejected' : 'Accepted'
            let date = received_dt
            
            return {
                tag : date,  htmlMode : true, color : referral.reject_reason ? 'red' : 'green',
                content : "Specimen was "+status+" by<br>" + 
                         received_by.name,
            }
        }
    }
}
</script>