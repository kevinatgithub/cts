<template>
    <div>
        <comp-url>Administration / References / Reject Reasons</comp-url>
        <h5>Reject Reasons</h5>
        <hr>
        <crud :storeData="reject_reasons" saveAction="addRejectReason" updateAction="updateRejectReason" deleteAction="deleteRejectReason" />
    </div>
</template>

<script>
import Crud from '../../App/Crud'
import {mapGetters} from 'vuex'

export default {
    components : {Crud},
    computed : {
        ...mapGetters(['reject_reasons'])
    }
}
</script>
