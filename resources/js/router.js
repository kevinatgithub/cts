import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

//Added Components
import Login from './components/Login'

import Request from './components/Request'
import Checklist from './components/Request/Checklist'

import Receive from './components/Receive'
import RegisterLoc from './components/Receive/RegisterLoc'

import LocateSample from './components/LocateSample'
import Testing from './components/Testing'
import Report from './components/Report'
import Privacy from './components/Privacy'

Vue.use(VueRouter);
Axios.defaults.baseURL = 'cts/public/api';

export default new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/request', component: Request },
        { path: '/checklist', component: Checklist },
        { path: '/receiving', component: Receive },
        { path: '/registerloc', component: RegisterLoc },
        { path: '/location', component: LocateSample },
        { path: '/testing', component: Testing },
        { path: '/report', component: Report },
        { path: '/privacy', component: Privacy },
    ]
})