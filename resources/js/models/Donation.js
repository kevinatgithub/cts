export default class Donation{

    constructor({donation_id,blood_type,donation_dt,reactiveResults,facility,donor,donation_type}){
        this.donation_id = donation_id
        this.blood_type = blood_type
        this.donation_dt = donation_dt
        this.reactiveResults = reactiveResults
        this.facility = facility
        this.donor = donor
        this.donation_type = donation_type
    }
}