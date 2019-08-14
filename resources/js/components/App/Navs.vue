<template>
    <div>
        <comp-url>App / Navs</comp-url>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand>
                <router-link class="navbar-brand" to="/">
                    <span class="d-none d-md-block d-lg-block d-xl-block">
                        <img src="img/favicon.png" alt="">
                        TTI - Confirmatory Testing
                    </span>
                    <span class="d-sm-block d-md-none d-lg-none d-xl-none">
                        <img src="img/favicon.png" alt=""> TTI - CTS
                    </span>
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                
                <b-navbar-nav class="ml-auto" v-if="!user">
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/login" nowrap>User Login &nbsp;&nbsp; <i class="fa fa-user"></i></router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="mr-auto" v-if="user">
                    <b-nav-item v-for="(item,i) in navItems" :key="i">
                        <router-link class="nav-link text-nowrap" :to="item.to">{{item.text}} &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    
                    <b-nav-item-dropdown text="Administration" class="nav-link text-nowrap" v-if="user.facility_cd == 'RITM'">
                        <b-dropdown-item><router-link to="/users" class="nav-dropdown-link">User Accounts</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/references" class="nav-dropdown-link">Manage References</router-link></b-dropdown-item>
                    </b-nav-item-dropdown>
                    
                    <b-nav-item class="d-block d-sm-block d-md-block d-lg-block d-xl-none" style="margin-top:1.1em;">
                        <span style="cursor:pointer;" @click="performLogout">Logout</span>
                    </b-nav-item>

                </b-navbar-nav>
                 <b-navbar-nav class="ml-auto" v-if="user">
                    <b-nav-form class="d-none d-xl-block">
                        <ul class="text-white text-nowrap">
                            <li style="list-style-type: none; !important" class="text-right"><i class="fa fa-user-circle"></i>&nbsp;&nbsp;{{user.name}}</li>
                            <li style="list-style-type: none; !important" class="text-right">
                                <span class="small">{{user.position}} | <span style="cursor:pointer;" @click="performLogout">Logout</span></span>
                            </li>
                        </ul>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    mounted(){
        this.checkLogin()
    },
    computed : {
        user(){
            return this.$store.getters.user
        },
        navItems(){
            if(!this.user){
                return []
            }else{
                if(this.user.facility_cd == 'RITM'){
                    return [
                        { to : '/receiving' , text : 'Receiving'},
                        { to : '/entry' , text : 'Data Entry'},
                        { to : '/report' , text : 'Reports'},
                        { to : '/stockyard' , text : 'Stock yard'},
                    ];
                }else{
                    return [
                        { to : '/request' , text : 'Confirmatory Request'},
                        { to : '/status' , text : 'Status'},
                    ];
                }
            }
        }
    },
    methods : {
        performLogout(){
            this.$session.remove('user')
            this.$store.dispatch('initUser',null)
            this.$router.push('/login')
        },
        checkLogin(){
            let user = this.$session.get('user')
            if(user != undefined || user != null){
                this.$store.dispatch('initUser',user)
            }else{
                this.$router.push('/login')
            }
        },
    },
}
</script>

<style scoped>
.nav-dropdown-link:hover{
    text-decoration: none;
}
.nav-dropdown-link{
    color:#000;
}
</style>
