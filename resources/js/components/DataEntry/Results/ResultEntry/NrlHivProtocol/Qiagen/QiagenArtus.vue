<template>
    <b-card>
        <b-card-text>QIAGEN ARTUS HIV-1</b-card-text>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION:
            </label>
            <b-form-select :options="options"></b-form-select>
            <b-button slot="append" v-b-modal.pcr-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                DATE TESTED:
            </label>
            <b-input type="date"></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                REMARKS:
            </label>
            <b-input></b-input>
        </b-input-group>

        <b-modal id="pcr-settings" header-bg-variant="dark" header-text-variant="white" title="PCR Results" hide-footer>
            <pcr-results />
        </b-modal>
    </b-card>
</template>
<script>
import PcrResults from '../../../../../Administration/References/PcrResults'
import { mapGetters } from 'vuex';
export default {
    components : {PcrResults},
    computed : {
        ...mapGetters(['pcr_results']),
        options(){
            if(!this.pcr_results){
                return []
            }
            let options = []
            this.pcr_results.forEach(o=>{
                options.push(o.name)
            })
            return options
        }
    }
}
</script>

