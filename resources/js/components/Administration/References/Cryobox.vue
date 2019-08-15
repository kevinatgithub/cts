<template>
    <div>
        <h5>Cryoboxes</h5>
        <hr>
        <b-table :items="cryoboxes" :fields="fields" show-empty striped head-variant="dark" bordered>
            <template slot="empty">
                <h4>No cryobox record yet</h4>
            </template>
        </b-table>
        <b-button variant="dark" size="md" v-b-modal.cryobox-form>New Cryobox</b-button>
        <b-modal id="cryobox-form" header-bg-variant="dark" header-text-variant="white" size="lg" hide-footer title="Cryobox">
            <cryobox @done="refreshCryoboxes" />
        </b-modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Cryobox from './Cryoboxes/CryoboxForm'
export default {
    components : {Cryobox},
    data(){
        return {
            fields : [
                {key:'cryobox_no', label : 'Cryobox No.', sortable : true},
                'columns', 'rows'
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
        }
    }
}
</script>

