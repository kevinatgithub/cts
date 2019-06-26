<template>
    <div>
        <crud :storeData="machines" saveAction="addMachine" updateAction="updateMachine" deleteAction="deleteMachine" />
    </div>
</template>
<script>
import Crud from '../../../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['machines'])
    }
}
</script>
