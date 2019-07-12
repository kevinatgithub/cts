<template>
    <div>
        <div v-show="!formVisible">
            <b-table :items="protocol.fields" head-variant="dark" :fields="['name','type','source','options']">
                <template slot="options" slot-scope="row">
                    <b-button variant="warning" @click="upd = row.item;formVisible = true" size="sm"><i class="fa fa-pencil"></i></b-button>
                    <b-button variant="danger" @click="del = row.item; $bvModal.show('confirm-delete' + ckey)" size="sm"><i class="fa fa-remove"></i></b-button>
                </template>
            </b-table>

            <b-button variant="info" size="sm" @click="formVisible = true">New Field</b-button>
        </div>
        
        <b-row v-if="formVisible">
            <b-col cols="6" class="mt-3">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Name:
                    </label>
                    <b-input placeholder='Name' v-model='upd.name' :disabled="loading"></b-input>
                </b-input-group>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Type:
                    </label>
                    <b-form-select v-model="upd.type" :options="['text','select','date']" :disabled="loading"></b-form-select>
                </b-input-group>
                <b-input-group class='mb-3' size="sm" v-show="upd.type == 'select'">
                    <label class='input-group-text' slot='prepend'>
                        Source:
                    </label>
                    <b-form-select v-model="upd.source" :options="option_categories" :disabled="loading"></b-form-select>
                    <b-button slot="append" @click="$bvModal.show('settings'+ckey)"><i class="fa fa-cog"></i></b-button>
                </b-input-group>

                <b-button variant="success" size="sm" @click="save">
                    <span v-if="!loading"><i class="fa fa-check"></i> Save</span>
                    <span v-if="loading"><i class="fa fa-spinner"></i> loading..</span>
                </b-button>
                <b-button variant="dark" size="sm" @click="upd = { name : null, type : 'text', source : null }; formVisible = false;"><i class="fa fa-remove"></i> Cancel</b-button>
            </b-col>
        </b-row>

        <b-modal :id="'confirm-delete' + ckey" header-bg-variant="danger" header-text-variant="white" title="Delete Field?" @ok="confirmDelete">
            Are you sure you want to delete this field?
        </b-modal>

        <b-modal :id="'settings' + ckey" header-bg-variant="dark" header-text-variant="white" title="Options Registry" size="lg">
            <options-registry @hasChange="optionsChanged" />
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import OptionsRegistry from '../../OptionsRegistry'
export default {
    components : {OptionsRegistry},
    props : ['protocol','isroot','parentID'],
    data(){
        return {
            formVisible : false, loading : false,
            upd : {
                name : null, type : 'text', source : null,
            }, del : null,
        }
    },
    computed : {
        ckey(){
            return Math.random()
        },
        ...mapGetters(['option_categories']),
    },
    methods : {
        optionsChanged(){
            this.$store.dispatch('options_fetch_categories')
        },
        async save(){
            let {protocol : {id},parentID,upd} = this
            this.loading = true
            if(upd.id != null){
                if(this.isroot){
                    let request = await this.$store.dispatch('test_protocol_field_update',{protocol_id : id, upd})
                }else{
                    let request = await this.$store.dispatch('test_protocol_form_field_update',{protocol_id : parentID,form_id : id, upd})
                }
            }else{
                if(this.isroot){
                    let request = await this.$store.dispatch('test_protocol_field_new',{protocol_id : id,upd})
                }else{
                    let request = await this.$store.dispatch('test_protocol_form_field_new',{protocol_id : parentID, form_id : id, upd})
                }
            }
            this.loading = false
            this.upd ={ name : null, type : 'text', source : null }
            this.formVisible = false
            this.$emit('hasChange',true)
        },
        async confirmDelete(){
            let {protocol : {id},parentID,del} = this
            
            if(this.isroot){
                let request = await this.$store.dispatch('test_protocol_field_delete',{protocol_id : id, del})
            }else{
                let request = await this.$store.dispatch('test_protocol_form_field_delete',{protocol_id : parentID, form_id : id, del})
            }

            this.del = null
            this.$emit('hasChange',true)
            this.$store.dispatch("fetchAllTestProtocols")
        }
    }
}
</script>
