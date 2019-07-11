<template>
    <div>
        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-book'></i>&nbsp;
                {{placeholder_text}}:
            </label>
            <b-input :placeholder='placeholder_text' v-model='new_value' autocomplete="off" @keypress.enter="save"></b-input>
            <b-button slot="append" variant="success" :disabled="!new_value || isBusy" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button slot="append" variant="dark" @click="new_value=null;update=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>

        <b-table
            class="mt-3" 
            :items="records" 
            selectable 
            @row-selected="select" 
            selected-variant="success" 
            select-mode="single" 
            :busy="isBusy"
            :fields="['id','name','options']"
            striped
            small
            per-page="10"
            :current-page="currentPage"
            head-variant="dark">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="danger" size="sm" @click="update = data.item; $bvModal.show('confirm-delete-' + category)"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="records.length"
            >
        </b-pagination>

        <b-modal :id="'confirm-delete-'+category" header-bg-variant="danger" header-text-variant="white" title="Delete Record" @ok="confirmDelete">
            Are you sure you wan't to delete this record?
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props : ['storeData','category'],
    data(){
        return {
            new_value : null,
            update : null,
            isBusy : false,
            currentPage : 1,
        }
    },
    computed : {
        records(){
            if(!this.storeData){
                return []
            }

            return this.storeData
        },
        placeholder_text(){
            return !this.update ? "New Value" : "Update Value"
        }
    },
    methods : {
        select(items){
            this.update = items[0]
            this.new_value = items[0].name
        },
        async save(){
            this.isBusy = true
            let request = null
            if(this.update){
                this.update.name = this.new_value
                this.update.category = this.category
                request = await this.$store.dispatch('options_update',this.update)
            }else{
                request = await this.$store.dispatch('options_new',{name : this.new_value, category : this.category})
            }
            
            this.update = null
            this.new_value = null
            this.isBusy = false
            this.$emit('hasChange',true)
        },
        async confirmDelete(){
            this.isBusy = true
            this.update.category = this.category
            let request = await this.$store.dispatch('options_delete',this.update)
            this.update = null
            this.new_value = null
            this.isBusy = false
            this.$emit('hasChange',true)
        }
    }
}
</script>
