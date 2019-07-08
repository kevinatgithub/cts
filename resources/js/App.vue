<template>
    <div>
        <navs></navs>

        <div class="container mt-5"> 
            <!--  style="height: 820px" -->
            <br>
            <router-view class="mt-1"></router-view>
        </div>

        <footah></footah>
        
    </div>    
</template>

<script>
import Navs from './components/App/Navs.vue'
import Footah from './components/App/Footer.vue'

export default {
    components: {Navs, Footah},
    async mounted(){
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchSpecimens')
        this.$store.dispatch('fetchCouriers')
        this.$store.dispatch('fetchMachines')
        this.$store.dispatch('fetchReagents')
        
        this.$store.dispatch('fetchKitMethods')
        this.$store.dispatch('fetchResultOptions')
        this.$store.dispatch('fetchParticleAgglutination')
        this.$store.dispatch('fetchSerodiaFinalInterpretation')
        this.$store.dispatch('fetchEiaResults')
        this.$store.dispatch('fetchWesternblotHiv')
        this.$store.dispatch('fetchPCR')
        this.$store.dispatch('fetchGeeniusHivInterpretation')
    }
}
</script>

