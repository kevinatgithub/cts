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
    async mounted(){
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchSpecimens')
        this.$store.dispatch('fetchCouriers')
        this.$store.dispatch('fetchMachines')
        this.$store.dispatch('fetchReagents')
        
        let kit_methods_request = await this.$store.dispatch('fetchKitMethods')
        this.$store.dispatch('initKitMethods',kit_methods_request.data)

        let result_options_request = await this.$store.dispatch('fetchResultOptions')
        this.$store.dispatch('initResultOptions',result_options_request.data)
        
        let serodia_hiv_request = await this.$store.dispatch('fetchSerodia')
        this.$store.dispatch('initSerodia',serodia_hiv_request.data)

        let serodia_hiv_final_status_results_request = await this.$store.dispatch('fetchSerodiaFinalOptions')
        this.$store.dispatch('initSerodiaFinalOptions',serodia_hiv_final_status_results_request.data)
    }
}
</script>

