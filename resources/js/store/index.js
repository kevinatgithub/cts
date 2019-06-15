import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {common} from './modules/common'
import {specimens} from './modules/specimen'
import {couriers} from './modules/courier'
import {refrigerator} from './modules/refrigerator'

export default new Vuex.Store({
    modules : {
        specimens,
        couriers,
        common,
        refrigerator,
    }
})