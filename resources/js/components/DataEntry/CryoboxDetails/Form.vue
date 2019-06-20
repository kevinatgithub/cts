<template>
    <div>
        <b-modal no-footer id="cryobox-selector" header-bg-variant="success" title="Cryobox Details" header-text-variant="white">
            <div v-if="step == 1">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-barcode'></i>&nbsp;
                        Cryobox #:
                    </label>
                    <b-input ref="cryobox_no" placeholder='Cryobox #' v-model='box.box_no'></b-input>
                    <b-button slot="append" title="Click here to set Cryobox Settings"  @click="settings='cryobox';$bvModal.show('settings')">
                        <i class="fa fa-question-circle"></i>
                    </b-button>
                </b-input-group>
                
                <small class="text-info"><i class="fa fa-info-circle"></i> Select the location of the specimen in the cryobox</small>
                <br>
                <b-row v-for="(row,i) in specimenSlots" :key="i">
                    <b-col v-if="box.slot">
                        <b-button v-for="(s,i2) in row" :key="i2" 
                            :variant="box.slot.x == i && box.slot.y == i2 ? 'warning' : 'outline-info'"
                            class="cryobox"
                            @click="box.slot={x:i,y:i2}">
                            {{s.text}}
                        </b-button>
                    </b-col>
                    <b-col v-if="!box.slot">
                        <b-button v-for="(s,i2) in row" :key="i2" 
                            variant="outline-info"
                            class="cryobox"
                            @click="box.slot={x:i,y:i2}">
                            {{s.text}}
                        </b-button>
                    </b-col>
                </b-row>
            </div>
            <div v-if="step == 2">

                <b-input-group class='mb-3' size="sm">
                    <label style="min-width:150px;" class='input-group-text' slot='prepend'>
                        <i class='fa fa-columns'></i>&nbsp;
                        Refrigerator:
                    </label>
                    <b-form-select v-model="box.refrigerator" :options="refrigerator_list"></b-form-select>
                    <b-button slot="append" @click="settings='refrigerator';$bvModal.show('settings')">
                        <i class="fa fa-question-circle"></i>
                    </b-button>
                </b-input-group>

                <b-input-group class='mb-3' size="sm">
                    <label style="min-width:150px;" class='input-group-text' slot='prepend'>
                        <i class='fa fa-list'></i>&nbsp;
                        Compartment:
                    </label>
                    <b-form-select v-model="box.compartment" :options="compartment_list"></b-form-select>
                </b-input-group>

                <b-input-group class='mb-3' size="sm">
                    <label style="min-width:150px;" class='input-group-text' slot='prepend'>
                        <i class='fa fa-align-justify'></i>&nbsp;
                        Row:
                    </label>
                    <b-form-select v-model="box.row" :options="row_list"></b-form-select>
                </b-input-group>

                <b-input-group class='mb-3' size="sm">
                    <label style="min-width:150px;" class='input-group-text' slot='prepend'>
                        <i class='fa fa-cube'></i>&nbsp;
                        Cryobox Slot:
                    </label>
                    <b-form-select v-model="box.cryobox_slot" :options="cryobox_slot_list"></b-form-select>
                </b-input-group>
            </div>
            <template slot="modal-footer" class="text-right">
                <b-button variant="dark" @click="step--" :disabled="backDisabled"><i class="fa fa-arrow-left"> Back</i></b-button>
                <b-button variant="primary" @click="step++" :disabled="nextDisabled" v-if="step != 2">Next <i class="fa fa-arrow-right"></i></b-button>
                <b-button variant="success" v-if="step == 2">Save <i class="fa fa-check"></i></b-button>
            </template>
        </b-modal>

        <settings :type="settings" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Settings from './Settings'
export default {
    components : {Settings},
    props : ['referral'],
    data(){
        return {
            box : {
                box_no : null,
                slot : null,
                refrigerator : null,
                compartment : null,
                row : null,
                cryobox_slot : null,
            },
            step :1,
            settings : 'cryobox',
        }
    },
    mounted(){
        let that = this
        this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
            if(modalId == 'cryobox-selector'){
                if(that.$refs.cryobox_no != undefined){
                    that.$refs.cryobox_no.focus()
                }
            }
        })
    },
    computed : {
        ...mapGetters(['cryobox','refrigerators']),
        specimenSlots(){
            let slots = []
            let {cryobox : {rows,columns}} = this
            for(let i = 0; i < rows; i++){
                let row = []
                for(let i2 = 0; i2 < rows; i2++){
                    row.push({
                        row : i,
                        column : i2,
                        text : (i*10) + i2 +1
                    })
                }
                slots.push(row)
            }
            return slots
        },
        nextDisabled(){
            if(this.step == 1){
                if(!this.box.box_no || !this.box.slot){
                    return true
                }
            }
            return false
        },
        backDisabled(){
            if(this.step == 1){
                return true
            }
            return false
        },
        refrigerator_list(){
            let list = [];
            this.refrigerators.forEach(r=>{
                list.push({
                    value : r.id, text : r.name
                })
            })
            return list
        },
        compartment_list(){
            let list = [];
            let ref = _.find(this.refrigerators,{id:this.box.refrigerator})
            if(!ref){
                return list
            }
            ref.compartments.forEach(c=>{
                list.push({
                    value : c.id , text : c.compartment_name
                })
            })
            return list
        },
        row_list(){
            let list = [];
            let ref = _.find(this.refrigerators,{id:this.box.refrigerator})
            if(!ref){
                return list
            }
            let compartment = _.find(ref.compartments,{id:this.box.compartment})
            if(!compartment){
                return list
            }
            compartment.sections.forEach((s,i)=>{
                s.rows.forEach(r=>{
                    let text = i == 0 ? 'Front'  : 'Back'
                    text += " " +r.row_name
                    list.push({
                        value : [i,r.id] , text
                    })
                })
            })
            return list
        },
        cryobox_slot_list(){
            let list = [];
            let ref = _.find(this.refrigerators,{id:this.box.refrigerator})
            if(!ref){
                return list
            }
            let compartment = _.find(ref.compartments,{id:this.box.compartment})
            if(!compartment){
                return list
            }
            if(!this.box.row){
                return list
            }
            
            let r = _.find(compartment.sections[this.box.row[0]].rows,{id:this.box.row[1]})
            if(!r){
                return list
            }
            r.cryoboxSlots.forEach((s,i)=>{
                list.push({
                    value : s.id, text : s.name
                })
            })
            return list
        }
    }
}
</script>


<style scoped>
.cryobox{
    margin : 3px;
    padding: 0px;
    font-size: 12px;
    min-width: 30px;
    min-height: 28px;
    border-radius: 2em;
}
</style>
