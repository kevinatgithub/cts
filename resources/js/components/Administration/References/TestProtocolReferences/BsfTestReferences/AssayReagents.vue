<template>
    <div>
        <crud :storeData="reagents" saveAction="addReagent" updateAction="updateReagent" deleteAction="deleteReagent" />
    </div>
</template>
<script>
import Crud from '../../../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['reagents'])
    }
}
</script>
