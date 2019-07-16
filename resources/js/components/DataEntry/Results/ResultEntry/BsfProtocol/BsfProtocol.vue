<template>
    <div>
        <b-row>
            <b-col>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-sliders'></i>&nbsp;
                        Machine:
                    </label>
                    <b-form-select v-model="test.machine" :options="machine_list"></b-form-select>
                    <b-button slot="append" v-b-modal.machines-settings><i class="fa fa-cog"></i></b-button>
                </b-input-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-card no-body border-variant="dark">
                    <b-tabs pills card vertical>
                        <b-tab title="Kit #1">
                            <bsf-protocol-kit kit="1"></bsf-protocol-kit>
                        </b-tab>
                        <b-tab title="Kit #2">
                            <bsf-protocol-kit kit="2"></bsf-protocol-kit>
                        </b-tab>
                        <b-tab title="Kit #3">
                            <bsf-protocol-kit kit="3"></bsf-protocol-kit>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="mt-3">
            <b-col cols="6">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-user'></i>&nbsp;
                        BSF MT:
                    </label>
                    <b-input placeholder='BSF MT' v-model='referral.result.bsf.bsf_mt'></b-input>
                </b-input-group>

            </b-col>
            <b-col cols="6">
                <b-input-group class='mb-1' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-id-card'></i>&nbsp;
                        HIV License:
                    </label>
                    <b-input placeholder='HIV License' v-model='test.hiv_license'></b-input>
                </b-input-group>
            </b-col>
        </b-row>

        <b-modal id="machines-settings" header-bg-variant="primary" header-text-variant="white" title="Machine List" hide-footer>
            <bsf-test-references />
        </b-modal>

        <b-modal id="reagent-settings" header-bg-variant="primary" header-text-variant="white" title="Assay Reagents" hide-footer>
            <bsf-test-references />
        </b-modal>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import BsfTestReferences from '../../../../Administration/References/TestProtocolReferences/BsfTestReferences'
import BsfProtocolKit from './BsfProtocolKit'
export default {
    props : ['referral'],
    components : {BsfTestReferences,BsfProtocolKit},
    mounted(){
        let bsf = {
            bsf_mt : null,
            hiv_license : null,
        }
        if(!this.referral.result){
            this.referral.result = {bsf, machines : []}
        }else if(!this.referral.result.bsf){
            this.referral.result.bsf = bsf
        }
    },
    data(){
        return {
            test : {
                machine : null
            }
        }
    },
    computed : {
        ...mapGetters(['machines']),
        machine_list(){
            if(this.machines){
                let list = [];
                this.machines.forEach(m=>{
                    list.push({
                        value : m.id , text : m.name
                    })
                })
                return list
            }
            return []
        }
    }
}
</script>

