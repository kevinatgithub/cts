<template>
    <div>
        <comp-url>Administration / References / Machine</comp-url>
        <h5>Machine</h5>
        <hr>
        <b-input-group class='mb-3'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-archive'></i>&nbsp;
                Machine:
            </label>
            <b-input placeholder='Machine Name' v-model='machine' @keypress.enter="save"></b-input>
            <b-button variant="success" slot="append" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button v-if="machine" variant="dark" slot="append" @click="machine=null;selected=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>
        <b-table 
            class="mt-3" 
            :items="machines" 
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
            :total-rows="machines.length"
            >
        </b-pagination>
        <b-modal id="confirm" title="Delete Machine" header-bg-variant="danger" header-text-variant="light" @ok="deleteMachine">
            Are you sure you wan't to delete the selected Machine?
        </b-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            machine : null,
            selected : null,
            isBusy : false,
            currentPage : 1,
        }
    },
    computed : mapGetters(['machines']),
    mounted(){
        
    },
    methods : {
        save(){
            let {selected,machine} = this
            if(selected && machine){
                this.selected.name = machine
                this.isBusy = true
                this.$store.dispatch('updateMachine',selected).then(r=>{
                    this.isBusy = false
                })
                this.selected = null;
            }else if(machine){
                this.isBusy = true
                this.$store.dispatch('addMachine',machine).then(r=>{
                    this.isBusy = false
                })
            }
            this.machine = null
        },
        select(items){
            this.selected = items[0]
            this.machine = items[0].name
        },
        confirmDelete(machine){
            this.selected = machine
            this.$bvModal.show("confirm")
        },
        deleteMachine(){
            this.isBusy = true
            this.$store.dispatch('deleteMachine',this.selected).then(r=>{
                this.isBusy = false
            })
            this.selected = null
            this.machine = null
        }
    }
}
</script>
