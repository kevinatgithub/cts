<template>
    <div>
        <b-tabs card small>
            <b-tab title="Particle Agglutination">
                <particle-agglutination />
            </b-tab>
            <b-tab title="Serodia Final Results">
                <serodia-hiv-interpretation />
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
import ParticleAgglutination from './FujirebioReferences/ParticleAgglutination'
import SerodiaHivInterpretation from './FujirebioReferences/SerodiaHivInterpretation'
export default {
    components : {ParticleAgglutination,SerodiaHivInterpretation}
}
</script>
