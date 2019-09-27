export default class Courier{
    constructor({fname,mname,lname,contact_no,provider,reference_no}){
        this.fname = fname ? fname : null
        this.mname = mname ? mname : null
        this.lname = lname ? lname : null
        this.contact_no = contact_no ? contact_no : null
        this.provider = provider ? provider : null
        this.reference_no = reference_no ? reference_no : null
    }
}