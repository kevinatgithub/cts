<template>
    <b-card no-body>
        <b-tabs>
            <b-tab title="Machines">
                <machines />
            </b-tab>
            <b-tab title="Test Kits">
                <assay-reagents />
            </b-tab>
        </b-tabs>
    </b-card>
</template>
<script>
import Machines from './BsfTestReferences/Machines'
import AssayReagents from './BsfTestReferences/AssayReagents'
export default {
    components : {Machines,AssayReagents},
}
</script>
