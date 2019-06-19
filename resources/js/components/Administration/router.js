import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Courier from './References/Courier'
import Interpretation from './References/Interpretation'
import Specimen from './References/Specimen'
import Cryobox from './References/Cryobox'
import Refrigerator from './References/Refrigerator'
import Machine from './References/Machine'
import Reagent from './References/Reagent'

export default new VueRouter({
    routes : [
        { component : Courier , path : '/references/courier' },
        { component : Interpretation , path : '/references/interpretation' },
        { component : Specimen , path : '/references/specimen' },
        { component : Cryobox , path : '/references/cryobox' },
        { component : Refrigerator , path : '/references/refrigerator' },
        { component : Machine , path : '/references/machine' },
        { component : Reagent , path : '/references/reagent' },
    ]
})