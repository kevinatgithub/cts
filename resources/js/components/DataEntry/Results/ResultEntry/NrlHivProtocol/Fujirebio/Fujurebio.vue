<template>
    <b-card bg-variant="white">
        <b-tabs>
            <b-tab title="SERODIA HIV 1">
                <serodia-hiv class="mt-3" kit="1" />
            </b-tab>
            <b-tab title="SERODIA HIV 2">
                <serodia-hiv class="mt-3" kit="2" />
            </b-tab>
            <b-tab title="ABSORPTION">
                <serodia-hiv class="mt-3" kit="ABS" />
            </b-tab>
        </b-tabs>

        <b-input-group size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                <i class='fa fa-book'></i>&nbsp;
                PA FINAL STATUS:
            </label>
            <b-form-select :options="serodia_hiv_final_status_results_options"></b-form-select>
            <b-button slot="append" v-b-modal.fujirebio-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group> 

        <b-modal id="fujirebio-settings" header-bg-variant="dark" header-text-variant="white" title="Fujirebio Diagnostics References" hide-footer>
            <fujirebio-references />
        </b-modal>
    </b-card>
</template>
<script>
import SerodiaHiv from './SerodiaHiv'
import FujirebioReferences from '../../../../../Administration/References/TestProtocolReferences/FujirebioReferences'
import { mapGetters } from 'vuex';
export default {
    components : {SerodiaHiv,FujirebioReferences},
    data(){
        return {
            form : {
                final_status : null,
            },
        }
    },
    computed : {
        ...mapGetters(['serodia_hiv_interpretation']),
        serodia_hiv_final_status_results_options(){
            if(!this.serodia_hiv_interpretation){
                return []
            }
            let options = []
            this.serodia_hiv_interpretation.forEach(r=>{
                options.push(r.name)
            })
            return options
        }
    }

}
</script>
