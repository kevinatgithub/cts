<template>
    <div>
        <h5>Kit Methods</h5>
        <hr>
        <crud :storeData="kit_methods" saveAction="newKitMethod" updateAction="updateKitMethod" deleteAction="deleteKitMethod" />
    </div>
</template>
<script>
import Crud from '../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['kit_methods'])
    }
}
</script>
