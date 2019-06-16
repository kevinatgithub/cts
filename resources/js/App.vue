<template>
    <div>
        <navs></navs>

        <div class="container mt-5 mb-5"> 
            <!--  style="height: 820px" -->
            <router-view></router-view>
        </div>

        <footah></footah>
        
    </div>    
</template>

<script>
import Navs from './components/App/Navs.vue'
import Footah from './components/App/Footer.vue'

export default {
    components: {Navs, Footah},
    mounted(){
        let user = this.$session.get('user')
        if(user != undefined || user != null){
            this.$store.dispatch('initUser',this.$session.get('user'))
        }
    },
}
</script>

