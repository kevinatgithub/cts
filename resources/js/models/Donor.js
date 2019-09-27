export default class Donor{
    constructor({initials,dob,nationality,civil_status,occupation,home_address,frequency,prev_donation}){
        this.initials = initials
        this.dob = dob
        this.nationality = nationality
        this.civil_status = civil_status
        this.occupation = occupation
        this.home_address = home_address
        this.frequency = frequency
        this.prev_donation = prev_donation
    }
}