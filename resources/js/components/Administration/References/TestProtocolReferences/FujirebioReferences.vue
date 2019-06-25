<template>
    <div>
        <b-tabs card pills small>
            <b-tab title="Serodia Results">
                <serodia-options />
            </b-tab>
            <b-tab title="Serodia Final Results">
                <serodia-final-options />
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
import SerodiaOptions from './FujirebioReferences/SerodiaOptions'
import SerodiaFinalOptions from './FujirebioReferences/SerodiaFinalOptions'
export default {
    components : {SerodiaOptions,SerodiaFinalOptions}
}
</script>
