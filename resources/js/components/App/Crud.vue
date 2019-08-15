<template>
    <div>
        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-book'></i>&nbsp;
                {{placeholder_text}}:
            </label>
            <b-input :placeholder='placeholder_text' v-model='new_value' @keypress.enter="save"></b-input>
            <b-button slot="append" variant="success" :disabled="!new_value || isBusy" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button slot="append" variant="dark" @click="new_value=null;update=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>

        <print-button-wrapper :printMode="printMode" @whenClicked="print" :elementID="'crud' + uniqueID" @callback="printMode=false"></print-button-wrapper>

        <div :id="'crud' + uniqueID">
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
                :per-page="perPage"
                :current-page="currentPage">
                <template slot="table-busy">
                    <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
                </template>
                <template slot="options" slot-scope="data">
                    <b-button v-show="!printMode" variant="danger" size="sm" @click="update = data.item" v-b-modal.confirm-delete><i class="fa fa-remove"></i></b-button>
                </template>
            </b-table>
        </div>

        <b-pagination
            v-show="!printMode"
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="records.length"
            >
        </b-pagination>


        <b-modal id="confirm-delete" header-bg-variant="danger" header-text-variant="white" title="Delete Record" @ok="confirmDelete">
            Are you sure you wan't to delete this record?
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PrintButtonWrapper from './PrintButtonWrapper'
export default {
    components : {PrintButtonWrapper},
    props : ['storeData','saveAction','updateAction','deleteAction'],
    data(){
        return {
            new_value : null,
            update : null,
            isBusy : false,
            currentPage : 1,
            printMode : false,
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
        },
        perPage(){
            return this.printMode ? 100000 : 10
        },
        uniqueID(){
            return Math.random()
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
                request = await this.$store.dispatch(this.updateAction,this.update)
            }else{
                request = await this.$store.dispatch(this.saveAction,{name : this.new_value})
            }
            
            this.update = null
            this.new_value = null
            this.isBusy = false
        },
        async confirmDelete(){
            this.isBusy = true
            let request = await this.$store.dispatch(this.deleteAction,this.update)
            this.update = null
            this.new_value = null
            this.isBusy = false
        },
        print(){
            this.printMode = true
        }
    }
}
</script>
