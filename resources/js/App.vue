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
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchSpecimens')
        this.$store.dispatch('fetchCouriers')
        this.$store.dispatch('fetchMachines')
        this.$store.dispatch('fetchReagents')
    }
}
</script>

