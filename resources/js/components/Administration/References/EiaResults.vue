<template>
    <div>
        <h5>EIA Results</h5>
        <hr>
        <crud :storeData="eia_results" saveAction="addEiaResult" updateAction="updateEiaResult" deleteAction="deleteEiaResult" />
    </div>
</template>
<script>
import Crud from '../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['eia_results'])
    }
}
</script>


