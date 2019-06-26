<template>
    <div>
        <crud :storeData="particle_agglutination" saveAction="newParticleAgglutination" updateAction="updateParticleAgglutination" deleteAction="deleteParticleAgglutination" />
    </div>
</template>
<script>
import Crud from '../../../../App/Crud'
import { mapGetters } from 'vuex';
export default {
    components : {Crud},
    computed : {
        ...mapGetters(['particle_agglutination'])
    }
}
</script>
