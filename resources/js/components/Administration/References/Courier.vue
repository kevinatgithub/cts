<template>
    <div>
        <comp-url>Administration / References / Courier</comp-url>
        <h5>Courier Services</h5>
        <hr>
        <b-input-group class='mb-3'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-truck'></i>&nbsp;
                Courier:
            </label>
            <b-input placeholder='Courier Name' v-model='courier' @keypress.enter="save"></b-input>
            <b-button variant="success" slot="append" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button v-if="courier" variant="dark" slot="append" @click="courier=null;selected=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>
        <b-table 
            class="mt-3" 
            :items="couriers" 
            selectable 
            @row-selected="select" 
            selected-variant="success" 
            select-mode="single" 
            :striped="true" 
            :busy="isBusy"
            :fields="['id','name','options']">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>
        <b-modal id="confirm" title="Delete Courier" header-bg-variant="danger" header-text-variant="light" @ok="deleteCourier">
            Are you sure you wan't to delete the selected courier?
        </b-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            courier : null,
            selected : null,
            isBusy : false,
        }
    },
    computed : mapGetters(['couriers']),
    mounted(){
        
    },
    methods : {
        save(){
            let {selected,courier} = this
            if(selected && courier){
                this.selected.name = courier
                this.isBusy = true
                this.$store.dispatch('updateCourier',selected).then(r=>{
                    this.isBusy = false
                })
                this.selected = null;
            }else if(courier){
                this.isBusy = true
                this.$store.dispatch('addCourier',courier).then(r=>{
                    this.isBusy = false
                })
            }
            this.courier = null
        },
        select(items){
            this.selected = items[0]
            this.courier = items[0].name
        },
        confirmDelete(courier){
            this.selected = courier
            this.$bvModal.show("confirm")
        },
        deleteCourier(){
            this.isBusy = true
            this.$store.dispatch('deleteCourier',this.selected).then(r=>{
                this.isBusy = false
            })
            this.selected = null
            this.courier = null
        }
    }
}
</script>
