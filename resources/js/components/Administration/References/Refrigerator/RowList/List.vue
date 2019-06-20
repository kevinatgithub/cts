<template>
    <div>

        <b-input-group class='mt-3'>
            <b-input placeholder='Enter Row Name' v-model='row_name' @keypress.enter="save"></b-input>
            <b-button variant="success" slot="append" @click="save">{{update ? "Update":"Add"}} Row</b-button>
            <b-button v-if="update" variant="dark" slot="append" @click="cancel">Cancel</b-button>
        </b-input-group>
        
        <b-table 
        class="mt-3"
        small
        selectable 
        @row-selected="selectRow" 
        :fields="['row_name','options']" 
        :items="items" 
        bordered 
        striped 
        head-variant="dark"
        :busy="busy">
            <template slot="options" slot-scope="row">
                <b-button variant="dark" size="sm" @click="edit(row.item)"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" size="sm" @click="confirmDelete(row.item)"><i class="fa fa-remove"></i></b-button>
            </template>
            <template slot="table-busy">
                <b-img src="./img/loading.gif" width="30"></b-img> Please wait..
            </template>
        </b-table>

        <b-modal :id="section" header-bg-variant="danger" header-text-variant="light" title="Delete Row" @ok="confirm">
            Are you sure you wan't to delete this row?
        </b-modal>
    </div>
</template>

<script>
export default {
    props : ['items','section','busy'],
    data(){
        return {
            row_name : null,
            update : null,
            toDelete : null,
        }
    },
    methods : {
        selectRow(items){
            let row = items[0]
            if(row != undefined){
                this.$emit("rowSelected",row);
            }
        },
        save(){
            if(this.update){
                this.update.row_name = this.row_name
                this.$emit("savePressed",{row : this.update, isNew : false})
                this.row_name = null
                this.update = null
            }else{
                this.$emit("savePressed",{row_name : this.row_name, isNew : true})
                this.row_name = null
            }
        },
        edit(row){
            this.update = row
            this.row_name = row.row_name
        },
        cancel(){
            this.update = null
            this.row_name = null
        },
        confirmDelete(row){
            this.toDelete = row
            this.$bvModal.show(this.section)
        },
        confirm(){
            this.$emit("deletePressed",this.toDelete)
            this.toDelete = null
        }
    }
}
</script>

