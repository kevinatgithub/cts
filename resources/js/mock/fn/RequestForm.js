import Bsf from "../../models/ReferralResults/Bsf"
import Kit from "../../models/BsfTestKit"
import Lot from "../../models/Lot"

export default class RequestForm{

    static autoAssign(){
        return new Bsf({
            machine:3,
            bsf_mt:"Robert Downey",
            hiv_license : "123",
            kits : [
                new Kit({
                    id:0, reagent:6, lots : [
                        new Lot({id:0,lot_no:111,optical_density:112,cutoff_value:113,interpretation:"NON-REACTIVE",date_tested:Date.now()}),
                        new Lot({id:1,lot_no:121,optical_density:122,cutoff_value:123,interpretation:"REACTIVE",date_tested:Date.now()}),
                        new Lot({id:2,lot_no:131,optical_density:132,cutoff_value:133,interpretation:"NON-REACTIVE",date_tested:Date.now()}),
                    ]
                }),
                new Kit({
                    id:1, reagent:3, lots : [
                        new Lot({id:0,lot_no:211,optical_density:212,cutoff_value:213,interpretation:"REACTIVE",date_tested:Date.now()}),
                        new Lot({id:1,lot_no:221,optical_density:222,cutoff_value:223,interpretation:"REACTIVE",date_tested:Date.now()}),
                        new Lot({id:2,lot_no:231,optical_density:232,cutoff_value:233,interpretation:"NON-REACTIVE",date_tested:Date.now()}),
                    ]
                }),
                new Kit({
                    id:2, reagent:2, lots : [
                        new Lot({id:0,lot_no:311,optical_density:312,cutoff_value:313,interpretation:"NON-REACTIVE",date_tested:Date.now()}),
                        new Lot({id:1,lot_no:321,optical_density:322,cutoff_value:323,interpretation:"REACTIVE",date_tested:Date.now()}),
                        new Lot({id:2,lot_no:331,optical_density:332,cutoff_value:333,interpretation:"REACTIVE",date_tested:Date.now()}),
                    ]
                }),
            ]
        })
    }
}