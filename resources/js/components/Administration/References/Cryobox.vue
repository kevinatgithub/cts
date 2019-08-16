<template>
    <div>
        <h5>Cryoboxes</h5>
        <hr>
        <b-table :items="cryoboxes" :fields="fields" show-empty striped head-variant="dark" bordered>
            <template slot="empty">
                No cryobox yet
            </template>
            <template slot="Size" slot-scope="data">
                {{data.item.columns}} x {{data.item.rows}}
            </template>
            <template slot="opts" slot-scope="data">
                <b-button variant="danger" size="sm" @click="current = data.item; "><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>
        <b-button variant="success" size="md" v-b-modal.cryobox-form>New Cryobox</b-button>
        <b-modal id="cryobox-form" header-bg-variant="dark" header-text-variant="white" size="lg" hide-footer title="Cryobox">
            <cryobox @done="refreshCryoboxes" />
        </b-modal>
        <b-modal id="confirm-delete" header-bg-variant="danger" header-text-variant="white" title="Confirm Delete Cryobox?" @ok="deleteCryobox">
            Are you sure to delete cryobox info?
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Cryobox from './Cryoboxes/CryoboxForm'
import CryoboxEdit from './Cryoboxes/CryoboxEditForm'
export default {
    components : {Cryobox,CryoboxEdit},
    data(){
        return {
            current : null,
            fields : [
                {key:'cryobox_no', label : 'Cryobox No.', sortable : true},
                'Size',
                {key:'opts', label : ''},
            ]
        }
    },
    computed : {
        ...mapGetters(['cryoboxes']),
    },
    methods : {
        refreshCryoboxes(){
            this.$bvModal.hide('cryobox-form')
            this.$store.dispatch('fetchCryoboxes')
        },
        showEditForm(cryobox){
            this.current = cryobox
            this.$bvModal.show('edit-form')
        },
        deleteCryobox(){

        }
    }
}
</script>

