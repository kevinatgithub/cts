<template>
    <div>
        <b-card class="mt-3" bg-variant="dark" header-text-variant="light" text-variant="light" title="Test Result not set">
            <b-card-text><i class="fa fa-info-circle"></i> Results has not been set yet</b-card-text>
            <b-button variant="primary" size="sm" v-b-modal.test-protocol>Submit Results</b-button>
        </b-card>

        <b-modal id="test-protocol" header-bg-variant="primary" header-text-variant="white" title="Select Test Protocol">
            <b-list-group class="text-center">
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='BSF';$bvModal.hide('test-protocol')">BSF Test Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='HIV';$bvModal.hide('test-protocol')">NRL HIV Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='HBV';$bvModal.hide('test-protocol')">NRL HBV Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='HCV';$bvModal.hide('test-protocol')">NRL HCV Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='MAL';$bvModal.hide('test-protocol')">NRL MAL Protocol</b-list-group-item>
                <b-list-group-item href="#" v-b-modal.test-protocol-form @click="protocol='SYP';$bvModal.hide('test-protocol')">NRL SYP Protocol</b-list-group-item>
            </b-list-group>
        </b-modal>

        <b-modal id="test-protocol-form" size="xl" header-bg-variant="dark" header-text-variant="white" :title="testProtocolTitle">

            <bsf-protocol v-if="protocol == 'BSF' && referral" :referral="referral"></bsf-protocol>

            <result-entry v-if="protocol != 'BSF'" :tti="protocol" />

            <test-protocol-footer v-if="protocol != 'BSF'" />

            <template slot="modal-footer">
                <b-button variant="dark" @click="$bvModal.hide('test-protocol-form')">Cancel</b-button>
                <b-button variant="primary" v-b-modal.verifier :disabled="!resultAcceptable || isBusy">
                    <span v-if="!isBusy">Save Results</span>
                    <span v-if="isBusy"><i class="fa fa-spinner"></i> Saving..</span>
                </b-button>
            </template>
        </b-modal>

        <verifier @ok="processForm" />

        
    </div>
</template>
<script>
import Verifier from '../../App/Verifier'
import BsfProtocol from './ResultEntry/BsfProtocol/BsfProtocol'
import NrlHivProtocol from './ResultEntry/NrlHivProtocol/NrlHivProtocol'
import NrlHbvProtocol from './ResultEntry/NrlHbvProtocol/NrlHbvProtocol'
import ResultEntry from './ResultEntry/ResultEntry'
import TestProtocolFooter from './ResultEntry/TestProtocolFooter'

export default {
    components : {Verifier,BsfProtocol,NrlHivProtocol,NrlHbvProtocol,ResultEntry,TestProtocolFooter},
    props : ['referral'],
    data(){
        return {
            protocol : null,
            isBusy : false,
        }
    },
    computed : {
        testProtocolTitle(){
            if(!this.protocol){
                return ""
            }
            switch(this.protocol.toUpperCase()){
                case "BSF":
                    return "BSF Test Protocol"
                default:
                    return "NRL "+this.protocol.toUpperCase()+" Protocol";
            }
        },
        resultAcceptable(){
            if(!this.referral){
                return false
            }

            if(this.protocol == 'BSF'){
                let {bsf : {machine, bsf_mt, hiv_license, kits}} = this.referral.results
                if(!machine || !bsf_mt || !hiv_license){
                    return false
                }else{
                    return true
                }
            }

            return true
        }
    },
    methods : {
        processForm(){
            switch(this.protocol){
                case 'BSF':
                    this.processBSF()
                    break;
            }
        },
        async processBSF(){
            this.isBusy = true
            let {confirmatory_reference_number} = this.referral
            let {bsf} = this.referral.results
            let request = await this.$store.dispatch("setReferralResultBSF",{bsf,confirmatory_reference_number})
            this.isBusy = false
            this.$bvModal.hide("test-protocol-form")
            this.$emit("resultSent")

        }
    }
}
</script>
