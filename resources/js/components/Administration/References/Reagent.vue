<template>
    <div>
        <comp-url>Administration / References / Reagent</comp-url>
        <h5>Reagent</h5>
        <hr>
        <b-input-group class='mb-3'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-archive'></i>&nbsp;
                Reagent:
            </label>
            <b-input placeholder='Reagent Name' v-model='reagent' @keypress.enter="save"></b-input>
            <b-button variant="success" slot="append" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button v-if="reagent" variant="dark" slot="append" @click="reagent=null;selected=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>
        <b-table 
            class="mt-3" 
            :items="reagents" 
            selectable 
            @row-selected="select" 
            selected-variant="success" 
            select-mode="single" 
            :striped="true" 
            :busy="isBusy"
            :fields="['id','name','options']"
            small
            per-page="10"
            :current-page="currentPage">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="reagents.length"
            >
        </b-pagination>
        <b-modal id="confirm" title="Delete Reagent" header-bg-variant="danger" header-text-variant="light" @ok="deleteReagent">
            Are you sure you wan't to delete the selected Reagent?
        </b-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            reagent : null,
            selected : null,
            isBusy : false,
            currentPage : 1,
        }
    },
    computed : mapGetters(['reagents']),
    mounted(){
        
    },
    methods : {
        save(){
            let {selected,reagent} = this
            if(selected && reagent){
                this.selected.name = reagent
                this.isBusy = true
                this.$store.dispatch('updateReagent',selected).then(r=>{
                    this.isBusy = false
                })
                this.selected = null;
            }else if(reagent){
                this.isBusy = true
                this.$store.dispatch('addReagent',reagent).then(r=>{
                    this.isBusy = false
                })
            }
            this.reagent = null
        },
        select(items){
            this.selected = items[0]
            this.reagent = items[0].name
        },
        confirmDelete(reagent){
            this.selected = reagent
            this.$bvModal.show("confirm")
        },
        deleteReagent(){
            this.isBusy = true
            this.$store.dispatch('deleteReagent',this.selected).then(r=>{
                this.isBusy = false
            })
            this.selected = null
            this.reagent = null
        }
    }
}
</script>
