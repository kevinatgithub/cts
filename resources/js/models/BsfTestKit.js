import Lot from "./Lot"

export default class BsfTestKit{

    constructor({id, reagent, lots}){
        this.id = id !== undefined ? id : null
        this.reagent = reagent ? reagent : null
        this.lots = lots ? lots : [
            new Lot({id:0}),
            new Lot({id:1}),
            new Lot({id:2}),
        ]
    }
}