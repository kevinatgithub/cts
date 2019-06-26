<template>
    <div>
        <h5>Westernbloot HIV</h5>
        <hr>
        <crud :storeData="westernblot_hiv" saveAction="addWesternblotHiv" updateAction="updateWesternblotHiv" deleteAction="deleteWesternblotHiv" />
    </div>
</template>
<script>
import Crud from '../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['westernblot_hiv']),
    }
}
</script>

