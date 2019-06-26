<template>
    <div>
        <crud :storeData="serodia_hiv_interpretation" saveAction="newSerodiaFinalInterpretation" updateAction="updateSerodiaFinalInterpretation" deleteAction="deleteSerodiaFinalInterpretation" />
    </div>
</template>
<script>
import Crud from '../../../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['serodia_hiv_interpretation'])
    },
}
</script>
