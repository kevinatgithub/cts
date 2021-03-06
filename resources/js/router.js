import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

//Added Components
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

import Request from './components/Request/Request'
import BsfRequests from './components/BsfRequests'
// import Checklist from './components/Request/Checklist'

import Receive from './components/Receive/Receive'
import DataEntry from './components/DataEntry/DataEntry'
import RegisterLoc from './components/Receive/RegisterLoc'

import Testing from './components/Testing'
import Report from './components/Report'
import Stockyard from './components/Stockyard'
import Privacy from './components/Privacy'

import ManageUsers from './components/Administration/ManageUsers'
import References from './components/Administration/References'

import UnstoredReferrals from './components/UnstoredReferrals'

Vue.use(VueRouter);
Axios.defaults.baseURL = 'cts/public/api';

export default new VueRouter({
    routes: [
        { path: '/', component: Dashboard },
        { path: '/login', component: Login, name : 'login' },
        { path: '/request', component: Request },
        { path: '/status', component: BsfRequests },
        // { path: '/checklist', component: Checklist },
        { path: '/receiving', component: Receive },
        { path: '/entry', component: DataEntry },
        { path: '/registerloc', component: RegisterLoc },
        { path: '/testing', component: Testing },
        { path: '/report', component: Report },
        { path: '/stockyard', component: Stockyard },
        { path: '/privacy', component: Privacy },
        { path: '/users', component: ManageUsers },
        { path: '/references', component: References },
        { path: '/references/specimen', redirect: '/references' },
        { path: '/references/refrigerator', redirect: '/references' },
        { path: '/references/cryobox', redirect: '/references' },
        { path: '/references/interpretation', redirect: '/references' },
        { path: '/references/courier', redirect: '/references' },
        { path: '/unstored-referrals', component : UnstoredReferrals},
    ],
    // mode : 'history',
})