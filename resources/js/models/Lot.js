export default class Lot{

    constructor({id, lot_no,   optical_density, cutoff_value, interpretation, date_tested}){
        this.id = id !== undefined ? id : null
        this.lot_no = lot_no ? lot_no : null
        this.optical_density = optical_density ? optical_density : null
        this.cutoff_value = cutoff_value ? cutoff_value : null
        this.interpretation = interpretation ? interpretation : null
        this.date_tested = date_tested ? date_tested : null
    }
}