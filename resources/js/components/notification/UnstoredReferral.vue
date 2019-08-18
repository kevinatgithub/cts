<template>
    <div>
        <b-card bg-variant="warning" text-variant="white" v-if="unstored_referrals.length">
            <i class="fa fa-info-circle"></i> You have 
            <router-link to="unstored-referrals" class="text-light">{{unstored_referrals.length}} {{unstored_referrals.length > 1 ? 'referrals' : 'referral'}}</router-link>
             with pending cryobox details
        </b-card>
        <b-button v-if="unstored_referrals.length == 0" variant="light" size="sm"><i class="fa fa-cubes"></i> Prepare Cryoboxes</b-button>
     </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters(['unstored_referrals']),
    }
}
</script>
