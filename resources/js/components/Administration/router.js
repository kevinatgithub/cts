import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hospital from './References/Hospital'
import Courier from './References/Courier'
import Specimen from './References/Specimen'
import Cryobox from './References/Cryobox'
import Refrigerator from './References/Refrigerator'
import Machine from './References/Machine'
import Reagent from './References/Reagent'
import KitMethod from './References/KitMethod'
import ResultOption from './References/ResultOptions'
import FujirebioReferences from './References/TestProtocolReferences/FujirebioReferences'

export default new VueRouter({
    routes : [
        { component : Hospital , path : '/references/hospital' },
        { component : Courier , path : '/references/courier' },
        { component : Specimen , path : '/references/specimen' },
        { component : Cryobox , path : '/references/cryobox' },
        { component : Refrigerator , path : '/references/refrigerator' },
        { component : Machine , path : '/references/machine' },
        { component : Reagent , path : '/references/reagent' },
        { component : KitMethod , path : '/references/kitmethods' },
        { component : ResultOption , path : '/references/resultoptions' },
        { component : FujirebioReferences , path : '/references/protocols/hiv/fujirebio' },
    ]
})