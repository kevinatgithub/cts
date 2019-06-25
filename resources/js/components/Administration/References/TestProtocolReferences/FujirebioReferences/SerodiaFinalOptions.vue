<template>
    <div>

        <b-input-group class='mt-3 mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-book'></i>&nbsp;
                Result:
            </label>
            <b-input placeholder='Result' v-model='test_result'></b-input>
            <b-button slot="append" variant="success" :disabled="!test_result || isBusy" @click="save"><i class="fa fa-check"></i></b-button>
            <b-button slot="append" variant="dark" @click="test_result=null;update=null;"><i class="fa fa-remove"></i></b-button>
        </b-input-group>

        <b-table
            class="mt-3" 
            :items="result_options" 
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
            :total-rows="result_options.length"
            >
        </b-pagination>

        <b-modal id="confirm-delete" header-bg-variant="danger" header-text-variant="white" title="Delete Result Option" @ok="confirmDelete">
            Are you sure you wan't to delete this Result Option?
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            test_result : null,
            update : null,
            isBusy : false,
            currentPage : 1,
        }
    },
    computed : {
        ...mapGetters(['serodia_hiv_final_status_results']),
        result_options(){
            return this.serodia_hiv_final_status_results
        },
    },
    methods : {
        select(items){
            this.update = items[0]
            this.test_result = items[0].name
        },
        async save(){
            this.isBusy = true
            let request = null
            if(this.update){
                this.update.name = this.test_result
                request = await this.$store.dispatch('updateSerodiaFinalOption',this.update)
            }else{
                request = await this.$store.dispatch('newSerodiaFinalOption',{name : this.test_result})
            }
            
            this.update = null
            this.test_result = null
            this.isBusy = false
        },
        async confirmDelete(){
            this.isBusy = true
            let request = await this.$store.dispatch('deleteSerodiaFinalOption',this.update)
            this.update = null
            this.test_result = null
            this.isBusy = false
        }
    }
}
</script>
