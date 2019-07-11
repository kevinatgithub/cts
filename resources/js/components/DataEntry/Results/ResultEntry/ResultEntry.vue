<template>
    <div>
        <b-card no-body>
            <b-tabs vertical card pills small>
                <b-tab v-for="(proto,i) in testProtocols" :key="i" :title="proto.name">
                    <result-entry-form :proto="proto" />
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>
import ResultEntryForm from './ResultEntryForm'
export default {
    components : {ResultEntryForm},
    props : ['tti'],
    data(){
        return {
            testProtocols : []
        }
    },
    async mounted(){
        let request = await this.$store.dispatch('test_protocols',this.tti)
        this.testProtocols = request.data
    },
}
</script>
