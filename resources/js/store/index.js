import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {user} from './modules/user'
import {common} from './modules/administration/common'
import {specimens} from './modules/administration/specimen'
import {couriers} from './modules/administration/courier'
import {refrigerator} from './modules/administration/refrigerator'
import {donation} from './modules/donation'
import {referral} from './modules/referral'

export default new Vuex.Store({
    modules : {
        specimens,
        couriers,
        common,
        refrigerator,
        donation,
        referral,
        user,
    }
})