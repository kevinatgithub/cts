<template>
    <div>
        <b-row>
            <b-col >

                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-sliders'></i>&nbsp;
                        Assay Reagent Used kit:
                    </label>
                    <b-form-select v-model="kit.reagent" :options="reagent_list"></b-form-select>
                    <b-button slot="append" v-b-modal.reagent-settings><i class="fa fa-cog"></i></b-button>
                </b-input-group>

                <b-card border-variant="dark" no-body>
                    <b-tabs card >
                        <b-tab v-for="lot in kit.lots" :key="lot.id+Math.random()" :title="'BB KIT LOT # ' + (lot.id + 1)">
                            <bsf-protocol-kit-form :lot="lot"></bsf-protocol-kit-form>
                        </b-tab>
                    </b-tabs>
                </b-card>


            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BsfProtocolKitForm from './BsfProtocolKit/BsfProtocolKitForm'

export default {
    props : ['kit'],
    components : {BsfProtocolKitForm},
    data(){
        return {
            form : {
                
            },
            interpretation_options : ['REACTIVE','NON-REACTIVE','EQUIVOCAL','GRAYZONE']
        }
    },
    computed : {
        ...mapGetters(['reagents']),
        reagent_list(){
            if(this.reagents){
                let list = []
                this.reagents.forEach(r=>{
                    list.push({
                        value : r.id, text : r.name
                    })
                })
                return list
            }
            return []
        },
    }
}
</script>
