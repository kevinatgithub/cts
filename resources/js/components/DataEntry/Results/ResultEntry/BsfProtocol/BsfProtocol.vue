<template>
    <div>
        <b-row>
            <b-col>
                <b-progress :max="51" :value="test_completion" animated striped variant="success" height="2px"></b-progress>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-input-group class='mt-3 mb-3' size="sm">
                    <label class='input-group-text' style="width:140px;" slot='prepend'>
                        <i class='fa fa-sliders'></i>&nbsp;
                        Machine:
                    </label>
                    <b-form-select v-model="form.machine" :options="machine_list"></b-form-select>
                    <b-button slot="append" v-b-modal.machines-settings><i class="fa fa-cog"></i></b-button>
                </b-input-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-card no-body>
                    <b-tabs pills card vertical>
                        <b-tab v-for="(kit,i) in form.kits" :key="i" :title="'Kit #' + (i+1)">
                            <bsf-protocol-kit :kit="kit"></bsf-protocol-kit>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="mt-3">
            <b-col cols="12">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-user'></i>&nbsp;
                        BSF MT:
                    </label>
                    <b-input placeholder='BSF MT' v-model='form.bsf_mt'></b-input>
                </b-input-group>

            </b-col>
            <b-col cols="12">
                <b-input-group class='mb-1' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-id-card'></i>&nbsp;
                        Proficiency License:
                    </label>
                    <b-input placeholder='Proficiency License' v-model='form.hiv_license'></b-input>
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
    data(){
        return {
            form : this.referral.results.bsf,
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
        },

        test_completion(){
            let p = 0;

            let {form : {machine, bsf_mt, hiv_license, kits}} = this

            if(machine !== null && machine !== ""){
                p++;
            }

            if(bsf_mt !== null && bsf_mt !== ""){
                p++;
            }

            if(hiv_license !== null && hiv_license !== ""){
                p++;
            }

            // p += (this.evalKit(kits[0])*3)
            p += this.evalKit(kits[0])
            p += this.evalKit(kits[1])
            p += this.evalKit(kits[2])

            this.$emit("reportCompletion",p)

            return p;
        }
    },
    methods : {
        evalKit(k){
            let p = 0;

            if(k.reagent !== null && k.reagent !== ""){
                p++;
            }

            // p += this.evalLot(k.lots[0])*3;
            p += this.evalLot(k.lots[0]);
            p += this.evalLot(k.lots[1]);
            p += this.evalLot(k.lots[2]);

            

            return p;
        },
        evalLot(l){
            let p = 0;

            if(l.lot_no !== null && l.lot_no !== ""){
                p++;
            }

            if(l.optical_density !== null && l.optical_density !== ""){
                p++;
            }

            if(l.cutoff_value !== null && l.cutoff_value !== ""){
                p++;
            }

            if(l.interpretation !== null && l.interpretation !== ""){
                p++;
            }

            if(l.date_tested !== null && l.date_tested !== ""){
                p++;
            }

            return p;
        },
    }
}
</script>

