<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerators'}]"></b-breadcrumb>

        <b-input-group class='mb-1'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-columns'></i>&nbsp;
                Refrigerator Name:
            </label>
            <b-input placeholder='Enter the name or label of the Refrigerator' v-model='refrigerator' @keypress.enter="save" style="min-width:200px;"></b-input>
            <b-button variant="success" slot="append" @click="save">{{update ? "Update" : "Add"}} Refrigerator</b-button>
            <b-button v-if="update" variant="dark" slot="append" @click="cancel">Cancel</b-button>
        </b-input-group>

        <b-table 
        small
        class="mt-3"
        selectable 
        select-mode="single" 
        @row-selected="selectRef" 
        :items="items" 
        :fields="['name','options']" 
        bordered 
        striped 
        head-variant="dark"
        :busy="isBusy">
            <template slot="options" slot-scope="data">
                <b-button variant="dark" size="sm" @click="edit(data.item)"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
        </b-table>
        

        <b-modal id="refrigerator" header-bg-variant="danger" header-text-variant="light" title="Delete Refrigerator" @ok="confirm">
            Are you sure you wan't to delete this refrigerator?
        </b-modal>

        <b-modal id="validationError" title="Validation Failed" header-bg-variant="danger" header-text-variant="light">
            Refrigerator name already exists!
        </b-modal>
    </div>
</template>
<script>
export default {
    props : ['items'],
    data(){
        return {
            refrigerator : null,
            update : null,
            toDelete : null,
            isBusy : false,
        }
    },
    methods : {
        selectRef(items){
            let ref = items[0]
            this.$emit("refSelected",ref)
        },
        save(){
            if(this.validate()){
                this.$bvModal.show('validationError')
                return
            }
            if(this.update){
                this.update.name = this.refrigerator
                this.isBusy = true
                this.$store.dispatch('updateRefrigerator',this.update)
                .then(r=>{
                    this.isBusy = false
                })
                this.update = null
                this.refrigerator = null
                return
            }
            this.isBusy = true
            this.$store.dispatch('newRefrigerator',this.refrigerator)
            .then(r=>{
                this.isBusy = false
            })
            this.refrigerator = null
            // this.$emit("savePressed",{name : this.refrigerator})
        },
        validate(){
            let {refrigerator, items} = this
            let exists = _.filter(items, ref=>{
                return ref.name == refrigerator
            })
            return exists.length > 0
        },
        edit(ref){
            this.update = ref
            this.refrigerator = ref.name
        },
        confirmDelete(ref){
            this.toDelete = ref
            this.$bvModal.show("refrigerator")
        },
        confirm(){
            this.isBusy = true
            this.$store.dispatch('deleteRefrigerator',this.toDelete)
            .then(r=>{
                this.isBusy = false
            })
            // this.$emit("deletePressed",this.toDelete)
            this.toDelete = null
        },
        cancel(){
            this.update = null
            this.refrigerator = null
        }
    }
}
</script>

