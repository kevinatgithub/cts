<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <router-link class="navbar-brand" to="/">
                <img src="img/favicon.png" alt="">
                TTI - Confirmatory Testing
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/request">Confirmatory Request &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/receiving">Receiving &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/testing">Testing &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/report">Reports &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/stockyard">Stock yard &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/location">Locate Samples &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right"></i></router-link>
                    </li>
                </ul>

                <ul class="text-white">
                    <li style="list-style-type: none; !important" class="text-right"><i class="fa fa-user-circle"></i>&nbsp;&nbsp;Abdul Mahatir Aljamalul Kiram</li>
                    <li style="list-style-type: none; !important" class="text-right">
                        <span class="small">Administrator | <router-link class="text-white" to="#">logout</router-link></span>
                    </li>
                </ul>   
                
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
