export default class Nrl{
    constructor({hiv,hbv,hcv,mal,syp}){
        this.hiv = hiv? hiv : []
        this.hbv = hbv? hbv : []
        this.hcv = hcv? hcv : []
        this.mal = mal? mal : []
        this.syp = syp? syp : []
    }
}