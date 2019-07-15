<template>
    <div>
        <h5>Test Protocols</h5>

        <b-row>
            <b-col cols="3">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        TTI:
                    </label>
                    <b-form-select v-model="form.tti" :options="tti_options" :disabled="loading"></b-form-select>
                </b-input-group>
            </b-col>
            <b-col cols="6">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Machine Name:
                    </label>
                    <b-input placeholder='Machine Name' v-model='form.name' :disabled="loading" @keypress.enter="save"></b-input>
                </b-input-group>
            </b-col>
            <b-col cols="3">
                <b-button variant="success" size="sm" @click="save">
                    <span v-if="!loading">
                        <i class="fa fa-check"></i> Add Test Protocol
                    </span>
                    <span v-if="loading">
                        <i class="fa fa-spinner"></i> Saving, please wait..
                    </span>
                </b-button>
            </b-col>
        </b-row>
        <b-table
            class="mt-3"
            :items="records"
            :isBusy="isBusy"
            :fields="fields"
            striped
            per-page="10"
            :current-page="currentPage">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="info" size="sm" @click="data.toggleDetails"><i :class="data.detailsShowing ? 'fa fa-minus' : 'fa fa-plus'"></i></b-button>
                <b-button variant="danger" size="sm" @click="del = data.item" v-b-modal.confirm-delete-protocol><i class="fa fa-remove"></i></b-button>
            </template>
            <template slot="row-details" slot-scope="row">
                <test-protocol-details :protocol="row.item" />
            </template>
            
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="records.length"
            >
        </b-pagination>

        <b-modal id="confirm-delete-protocol" header-bg-variant="danger" header-text-variant="white" title="Delete Test Protocol?" @ok="confirmDelete">
            Are you sure you wan't to delete this test protocol?
        </b-modal>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TestProtocolDetails from './TestProtocols/TestProtocolDetails'
export default {
    components : {TestProtocolDetails},
    data(){
        return {
            isBusy : false,
            fields : ['tti',{ key : 'name' ,label : 'Machine', sortable : true},'options'],
            currentPage : 1,
            update : null,
            del : null,
            form : {tti : null, name : null},
            loading : false,
            tti_options : [
                'HIV', 'HBV', 'HCV', 'MAL', 'SYP',
            ],
        }
    },
    computed : {
        ...mapGetters(['test_protocols']),
        records(){
            return this.test_protocols
        }
    },
    methods : {
        async confirmDelete(){
            let request = await this.$store.dispatch('test_protocol_delete',this.del)
            this.del = null
            this.$store.dispatch('fetchAllTestProtocols')
        },
        async save(){
            let {form} = this
            this.loading = true
            let request = await this.$store.dispatch('test_protocol_new',form)
            this.loading = false
            this.form = {tti : null, name : null}
            this.$store.dispatch('fetchAllTestProtocols')
        }
    }
}
</script>
