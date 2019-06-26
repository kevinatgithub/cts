<template>
    <div>
        <h5>PCR Results</h5>
        <hr>
        <crud :storeData="pcr_results" saveAction="addPCR" updateAction="updatePCR" deleteAction="deletePCR" />
    </div>
</template>
<script>
import Crud from '../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['pcr_results']),
    }
}
</script>

