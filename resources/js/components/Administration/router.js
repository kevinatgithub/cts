import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hospital from './References/Hospital'
import Courier from './References/Courier'
import Specimen from './References/Specimen'
import Cryobox from './References/Cryobox'
import Refrigerator from './References/Refrigerator'
import KitMethod from './References/KitMethod'
import ResultOption from './References/ResultOptions'
import BsfTestReferences from './References/TestProtocolReferences/BsfTestReferences'
import FujirebioReferences from './References/TestProtocolReferences/FujirebioReferences'
import EiaResults from './References/EiaResults'
import WesternblotHiv from './References/WesternblotHiv'
import PcrResults from './References/PcrResults'
import GeeniusHivInterpretations from './References/GeeniusHivInterpretations'

export default new VueRouter({
    routes : [
        { component : Hospital , path : '/references/hospital' },
        { component : Courier , path : '/references/courier' },
        { component : Specimen , path : '/references/specimen' },
        { component : Cryobox , path : '/references/cryobox' },
        { component : Refrigerator , path : '/references/refrigerator' },
        { component : KitMethod , path : '/references/kitmethods' },
        { component : ResultOption , path : '/references/resultoptions' },
        { component : BsfTestReferences , path : '/references/protocols/hiv/bsf' },
        { component : FujirebioReferences , path : '/references/protocols/hiv/fujirebio' },
        { component : EiaResults , path : '/references/eia_results'},
        { component : WesternblotHiv , path : '/references/westernblot_hiv'},
        { component : PcrResults , path : '/references/pcr_results'},
        { component : GeeniusHivInterpretations , path : '/references/geenius_hiv_interpretations'},
    ]
})