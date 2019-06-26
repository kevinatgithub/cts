<template>
    <div>
        <comp-url>Administration / References / Specimen</comp-url>
        <h5>Specimen</h5>
        <hr>
        <crud :storeData="specimens" saveAction="addSpecimen" updateAction="updateSpecimen" deleteAction="deleteSpecimen" />
    </div>
</template>

<script>
import Crud from '../../App/Crud'
import {mapGetters} from 'vuex'

export default {
    components : {Crud},
    computed : {
        ...mapGetters(['specimens'])
    }
}
</script>
