<template>
    <div>
        <h5>Geenius HIV Interpretations</h5>
        <hr>
        <crud :storeData="geenius_hiv_interpretation" saveAction="addGeeniusHivInterpretation" updateAction="updateGeeniusHivInterpretation" deleteAction="deleteGeeniusHivInterpretation" />
    </div>
</template>
<script>
import Crud from '../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['geenius_hiv_interpretation']),
    }
}
</script>