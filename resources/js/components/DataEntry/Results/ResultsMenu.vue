<template>
    <div>
        <b-card class="mt-3" bg-variant="dark" header-text-variant="light" text-variant="light" title="Test Result not set">
            <b-card-text><i class="fa fa-info-circle"></i> Results has not been set yet</b-card-text>
            <b-button variant="primary" size="sm" v-b-modal.test-protocol>Submit Results</b-button>
        </b-card>

        <b-modal id="test-protocol" header-bg-variant="primary" header-text-variant="white" title="Select Test Protocol">
            <b-list-group class="text-center">
                <b-list-group-item href="#" v-b-modal.bsf-protocol @click="$bvModal.hide('test-protocol')">BSF Test Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.nrl-hiv-protocol @click="$bvModal.hide('test-protocol')">NRL HIV Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.nrl-hbv-protocol @click="$bvModal.hide('test-protocol')">NRL HBV Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.nrl-hcv-protocol @click="$bvModal.hide('test-protocol')">NRL HCV Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL MAL Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL SYP Protocol</b-list-group-item>
            </b-list-group>
        </b-modal>

        <b-modal id="bsf-protocol" size="lg" header-bg-variant="dark" header-text-variant="white" title="BSF Test Protocol">
            <bsf-protocol></bsf-protocol>

            <template slot="modal-footer">
                <b-button variant="dark">Cancel</b-button>
                <b-button variant="primary" v-b-modal.verifier>Save Results</b-button>
            </template>
        </b-modal>

        <b-modal id="nrl-hiv-protocol" size="xl" header-bg-variant="dark" header-text-variant="white" title="NRL HIV Protocol">

            <nrl-hiv-protocol></nrl-hiv-protocol>

            <template slot="modal-footer">
                <b-button variant="dark">Cancel</b-button>
                <b-button variant="primary" v-b-modal.verifier>Save Results</b-button>
            </template>
        </b-modal>

        <b-modal id="nrl-hbv-protocol" size="xl" header-bg-variant="dark" header-text-variant="white" title="NRL HBV Protocol">
            
            <nrl-hbv-protocol></nrl-hbv-protocol>

            <template slot="modal-footer">
                <b-button variant="dark">Cancel</b-button>
                <b-button variant="primary" v-b-modal.verifier>Save Results</b-button>
            </template>
        </b-modal>

        <b-modal id="nrl-hcv-protocol" size="xl" header-bg-variant="dark" header-text-variant="white" title="NRL HCV Protocol">
            <result-entry tti="HIV" />

            <template slot="modal-footer">
                <b-button variant="dark">Cancel</b-button>
                <b-button variant="primary" v-b-modal.verifier>Save Results</b-button>
            </template>
        </b-modal>

        <verifier />

        
    </div>
</template>
<script>
import Verifier from '../../App/Verifier'
import BsfProtocol from './ResultEntry/BsfProtocol/BsfProtocol'
import NrlHivProtocol from './ResultEntry/NrlHivProtocol/NrlHivProtocol'
import NrlHbvProtocol from './ResultEntry/NrlHbvProtocol/NrlHbvProtocol'
import ResultEntry from './ResultEntry/ResultEntry'

export default {
    components : {Verifier,BsfProtocol,NrlHivProtocol,NrlHbvProtocol,ResultEntry},
    props : ['referral']
}
</script>
