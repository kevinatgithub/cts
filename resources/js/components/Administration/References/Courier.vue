<template>
    <div>
        <h5>Courier Services</h5>
        <hr>
        <crud :storeData="couriers" saveAction="addCourier" updateAction="updateCourier" deleteAction="deleteCourier" />
    </div>
</template>

<script>
import Crud from '../../App/Crud'
import {mapGetters} from 'vuex'
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['couriers'])
    }
}
</script>
