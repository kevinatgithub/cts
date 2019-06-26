<template>
    <b-card bg-variant="white">
        <b-tabs>
            <b-tab title="ARCHITECT 1">
                <architect kit="1" class="mt-3" />
            </b-tab>
            <b-tab title="ARCHITECT 2">
                <architect kit="2" class="mt-3" />
            </b-tab>
            <b-tab title="ARCHITECT 3">
                <architect kit="3" class="mt-3" />
            </b-tab>
        </b-tabs>

        <b-input-group size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                <i class='fa fa-book'></i>&nbsp;
                ARCHITECT FINAL STATUS:
            </label>
            <b-form-select :options="architect_results"></b-form-select>
            <b-button slot="append" v-b-modal.eia-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group> 

        <b-modal id="eia-settings" header-bg-variant="dark" header-text-variant="white" title="EIA Results Settings" hide-footer>
            <eia-results />
        </b-modal>
    </b-card>
</template>
<script>
import Architect from './Architect'
import EiaResults from '../../../../../Administration/References/EiaResults'
import { mapGetters } from 'vuex';
export default {
    components : {Architect,EiaResults},
    computed : {
        ...mapGetters(['eia_results']),
        architect_results(){
            if(!this.eia_results){
                return []
            }
            let options = []
            this.eia_results.forEach(o=>{
                options.push(o.name)
            })
            return options
        }
    }
}
</script>
