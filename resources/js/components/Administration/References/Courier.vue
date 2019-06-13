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
            <b-button v-if="courier" variant="danger" slot="append" @click="courier=null;selected=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>
        <b-button v-if="selected" variant="danger" size="sm" v-b-modal.confirm>Delete Selected Courier</b-button>
        <b-table class="mt-3" :items="items" selectable @row-selected="select" selected-variant="success" select-mode="single" :striped="true"></b-table>
        <b-modal id="confirm" title="Delete Courier" header-bg-variant="danger" header-text-variant="light" @ok="deleteCourier">
            Are you sure you wan't to delete the selected courier?
        </b-modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            courier : null,
            selected : null,
            items : [
                {id : 0, name : 'FedEx'},
                {id : 1, name : 'LBC'},
                {id : 2, name : 'Lalamove'},
                {id : 3, name : 'GrabExpress'},
            ]
        }
    },
    methods : {
        save(){
            let {selected,courier} = this
            if(selected && courier){
                this.courier = null;
                this.selected = null;
            }
            if(courier){
                this.items.push({
                    id : this.items.length,
                    name : courier
                })
            }
            this.courier = null
        },
        select(items){
            this.selected = items[0]
            this.courier = items[0].name
        },
        deleteCourier(){
            _.remove(this.items,item=>{
                return item.id == this.selected.id*1
            })
            this.selected = null
            this.courier = null
        }
    }
}
</script>
