<template>
    <div>
        <h3 class="text-info">Dashboard</h3>
        <hr>
        <div v-if="user">
            <ritm-dashboard v-if="user.facility_cd == 'RITM'"></ritm-dashboard>
        </div>
    </div>
</template>
<script>
import RitmDashboard from './Dashboard/RitmDashboard'
export default {
    components : {RitmDashboard},
    computed : {
        user(){
            return this.$store.getters.user
        }
    }
}
</script>
