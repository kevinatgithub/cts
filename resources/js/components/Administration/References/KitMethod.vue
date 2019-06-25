<template>
    <div>
        <h5>Kit Methods</h5>
        <hr>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-book'></i>&nbsp;
                Kit Method:
            </label>
            <b-input placeholder='Kit Method' v-model='method_name'></b-input>
            <b-button slot="append" variant="success" :disabled="!method_name || isBusy" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button slot="append" variant="dark" @click="method_name=null;update=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>

        <b-table
            class="mt-3" 
            :items="kit_methods" 
            selectable 
            @row-selected="select" 
            selected-variant="success" 
            select-mode="single" 
            :busy="isBusy"
            :fields="['id','name','options']"
            striped
            small
            per-page="10"
            :current-page="currentPage">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="danger" size="sm" @click="update = data.item" v-b-modal.confirm-delete><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="kit_methods.length"
            >
        </b-pagination>

        <b-modal id="confirm-delete" header-bg-variant="danger" header-text-variant="white" title="Delete Kit Method" @ok="confirmDelete">
            Are you sure you wan't to delete this Kit Method?
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            method_name : null,
            update : null,
            isBusy : false,
            currentPage : 1,
        }
    },
    computed : {
        ...mapGetters(['kit_methods']),
    },
    methods : {
        select(items){
            this.update = items[0]
            this.method_name = items[0].name
        },
        async save(){
            this.isBusy = true
            let request = null
            if(this.update){
                this.update.name = this.method_name
                request = await this.$store.dispatch('updateKitMethod',this.update)
            }else{
                request = await this.$store.dispatch('newKitMethod',{name : this.method_name})
            }
            
            this.update = null
            this.method_name = null
            this.isBusy = false
        },
        async confirmDelete(){
            this.isBusy = true
            let request = await this.$store.dispatch('deleteKitMethod',this.update)
            this.update = null
            this.test_result = null
            this.isBusy = false
        }
    }
}
</script>
