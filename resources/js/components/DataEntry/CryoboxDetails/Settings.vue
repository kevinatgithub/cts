<template>
    <div>
        <b-modal id="settings" title="Settings" size="lg" header-bg-variant="dark" header-text-variant="white">
            <cryobox v-if="type=='cryobox'" />
            <refrigerator v-if="type=='refrigerator'" />
        </b-modal>
    </div>
</template>

<script>
import Cryobox from '../../Administration/References/Cryobox'
import Refrigerator from '../../Administration/References/Refrigerator'
export default {
    props : ['type'],
    components : {Cryobox,Refrigerator}
}
</script>

