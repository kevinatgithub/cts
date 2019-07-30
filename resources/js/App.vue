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
        this.$store.dispatch('fetchAllTestProtocols')
        this.$store.dispatch('options_fetch_categories')
        this.$store.dispatch('fetchReportTemplates')
    }
}
</script>

<style>
.report-preview-content {
    width : 595px;
    height: 842px;
    border: 1px solid #000;
    margin-left:auto;
    margin-right:auto;
}
.report-preview-content table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    width:100%;
}
.report-preview-content table.bordered td{
    border:1px solid #000;
}
/* .footer-logo{
    position:absolute;
    margin-bottom: 5px;
} */
/* .report-preview-content td {
    border:1px solid #000;
} */
</style>
