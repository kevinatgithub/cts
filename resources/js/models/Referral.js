import Courier from './Courier'
import ReferralResults from './ReferralResults'

export default class Referral{
    
    constructor({donation,courier,courierMode,donation_id,specimen,request_by,created_dt,shipped_dt,results,reject_reason}){
        this.donation = donation
        this.courier = courier? courier : new Courier({})
        this.courierMode = courierMode
        this.donation_id = donation_id
        this.specimen = specimen
        this.request_by = request_by
        this.created_dt = created_dt
        this.shipped_dt = shipped_dt
        this.results = results ? results : new ReferralResults({})
        this.reject_reason = reject_reason ? reject_reason : []
    }
}