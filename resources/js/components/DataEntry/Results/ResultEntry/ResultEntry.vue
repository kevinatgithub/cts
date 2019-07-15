<template>
    <div>
        <div>
            <b-button class="pull-right" size="sm" v-b-modal.settings-test-protocols><i class="fa fa-cogs"></i></b-button>
            
            <b-modal id="settings-test-protocols" header-bg-variant="dark" header-text-variant="white" title="Test Protocols" size="lg" hide-footer>
                <test-protocols />
            </b-modal>
        </div>
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
import TestProtocols from '../../../Administration/References/TestProtocols'
export default {
    components : {ResultEntryForm, TestProtocols},
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
