import Bsf from "./ReferralResults/Bsf"
import Nrl from "./ReferralResults/Nrl"

export default class ReferralResults{
    constructor({}){
        this.bsf = new Bsf({})
        this.nrl = new Nrl({})
    }
}