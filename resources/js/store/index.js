import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {user} from './modules/user'
import {common} from './modules/administration/common'
import {hospital} from './modules/administration/hospital'
import {specimens} from './modules/administration/specimen'
import {couriers} from './modules/administration/courier'
import {refrigerator} from './modules/administration/refrigerator'
import {cryobox} from './modules/administration/cryobox'
import {machines} from './modules/administration/machine'
import {reagents} from './modules/administration/reagent'
import {donation} from './modules/donation'
import {referral} from './modules/referral'
import {kit_method} from './modules/administration/kit_method'
import {result_option} from './modules/administration/result_option'
import {fujirebio} from './modules/administration/test_protocols/fujirebio'
import {options} from './modules/administration/options'
import {test_protocol} from './modules/administration/test_protocol'
import {report_template} from './modules/administration/report_template'

export default new Vuex.Store({
    modules : {
        hospital,
        specimens,
        couriers,
        common,
        refrigerator,
        donation,
        referral,
        user,
        machines,
        reagents,
        cryobox,
        kit_method,
        result_option,
        fujirebio,
        options,
        test_protocol,
        report_template,
    }
})