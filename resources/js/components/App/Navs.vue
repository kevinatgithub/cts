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
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/request">Confirmatory Request &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/receiving" nowrap>Receiving &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/testing" nowrap>Testing &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/report" nowrap>Reports &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link class="nav-link text-nowrap" to="/stockyard" nowrap>Stock yard &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </b-nav-item>
                    <b-nav-item-dropdown text="Administration" class="nav-link text-nowrap">
                        <b-dropdown-item><router-link to="/users" class="nav-dropdown-link">User Accounts</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/references" class="nav-dropdown-link">Manage References</router-link></b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item class="d-block d-sm-block d-md-block d-lg-block d-xl-none">
                        <router-link class="nav-link text-nowrap" to="/logout" nowrap>Logout</router-link>
                    </b-nav-item>
                </b-navbar-nav>
                 <b-navbar-nav class="ml-auto" v-if="user">
                    <b-nav-form class="d-none d-xl-block">
                        <ul class="text-white text-nowrap">
                            <li style="list-style-type: none; !important" class="text-right"><i class="fa fa-user-circle"></i>&nbsp;&nbsp;Abdul Mahatir Aljamalul Kiram</li>
                            <li style="list-style-type: none; !important" class="text-right">
                                <span class="small">Administrator | <router-link class="text-white" to="#">logout</router-link></span>
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
        console.log(this.user)
    },
    computed : {
        user(){
            return this.$store.getters.user
        }
    }
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
