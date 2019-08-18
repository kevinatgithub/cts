<template>
    <div>
        <b-modal no-footer id="cryobox-selector" header-bg-variant="success" title="Cryobox Details" header-text-variant="white">
            <div v-if="step == 1">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-barcode'></i>&nbsp;
                        Cryobox #:
                    </label>
                    <!-- <b-input v-if="scanNumber" ref="cryobox_no" placeholder='Cryobox #' v-model='box.box_no'></b-input> -->
                    <b-form-select v-if="!scanNumber" v-model="box.box_no" :options="cryoboxNumbers" @change="refreshMap"></b-form-select>
                    <!-- <b-button slot="append" @click="scanNumber = !scanNumber"><i class="fa fa-retweet"></i></b-button> -->
                    <b-button slot="append" title="Click here to set Cryobox Settings"  @click="settings='cryobox';$bvModal.show('settings')">
                        <i class="fa fa-question-circle"></i>
                    </b-button>
                </b-input-group>
                <div v-if="box.box_no" style="height:300px;">
                    <small class="text-info"><i class="fa fa-info-circle"></i> Select the location of the specimen in the cryobox</small>
                    <br>
                    <cryobox-map v-if="showthis" @slotClicked="slotClicked" :box="box"></cryobox-map>
                </div>
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
                <b-button variant="success" v-if="step == 2" @click="save" :disabled="save_busy">
                    <span v-if="!save_busy">
                        Save <i class="fa fa-check"></i>
                    </span>
                    <span v-if="save_busy">
                        <i class="fa fa-spinner"></i> Saving..
                    </span>
                </b-button>
            </template>
        </b-modal>

        <settings :type="settings" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CryoboxMap from './CryoboxMap'
import Settings from './Settings'
export default {
    components : {CryoboxMap,Settings},
    props : ['referral','pcryobox'],
    data(){
        let {pcryobox} = this
        let box = {
            box_no : null,
            slot : null,
            refrigerator : null,
            compartment : null,
            row : null,
            cryobox_slot : null,
        }
        box = _.extend(box,pcryobox)
        return {
            scanNumber : false,
            box,
            step :1,
            settings : 'cryobox',
            save_busy : false,
            showthis : true
        }
    },
    async mounted(){
        let that = this
        this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
            if(modalId == 'cryobox-selector'){
                if(that.$refs.cryobox_no != undefined){
                    that.$refs.cryobox_no.focus()
                }
            }
        })
        await this.$store.dispatch('fetchCryoboxes')
    },
    computed : {
        ...mapGetters(['cryoboxes','refrigerators']),
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
        },
        cryoboxNumbers(){
            if(!this.cryoboxes){
                return []
            }
            return this.cryoboxes.map(b=>b.cryobox_no)
        }
    },
    methods : {
        async save(){
            this.save_busy = true
            let referral = this.referral
            referral.cryobox = this.box
            referral.cryobox.stored_by = this.$session.get('user')
            referral.cryobox.stored_dt = Date.now()
            let response = await this.$store.dispatch('setReferralCryoboxAndRefrigeratorDetails',referral)
            if(!response){
                console.log('an error occured')
                return
            }
            // response = await this.$store.dispatch('newCryobox',this.box)
            // await this.$store.dispatch('fetchCryoboxes')
            this.save_busy = false
            this.$emit('savePressed',this.box)
            this.$bvModal.hide('cryobox-selector')
            this.resetForm()
        },
        resetForm(){
            this.box = {
                box_no : null,
                slot : null,
                refrigerator : null,
                compartment : null,
                row : null,
                cryobox_slot : null,
            };
            this.step = 1;
            this.settings = 'cryobox';
        },
        slotClicked(slot){
            this.box.slot = slot
        },
        refreshMap(){
            let that = this
            this.showthis = false
            this.box.slot = null
            window.setTimeout(function(){
                that.showthis = true
            },1)
        }
    },
    watch : {
        pcryobox(){
            this.box = _.extend(this.box,this.pcryobox)
        },
    }
}
</script>



