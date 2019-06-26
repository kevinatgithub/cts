<template>
    <b-card no-body>
        <b-tabs>
            <b-tab title="GENSCREEN 1">
                <genscreen-form class="mt-3" kit="1" />
            </b-tab>
            <b-tab title="GENSCREEN 2">
                <genscreen-form class="mt-3" kit="2" />
            </b-tab>
        </b-tabs>

        <b-input-group size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                <i class='fa fa-book'></i>&nbsp;
                GENSCREEN FINAL STATUS:
            </label>
            <b-form-select :options="genscreen_results"></b-form-select>
            <b-button slot="append" v-b-modal.eia-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group> 

        <b-modal id="eia-settings" header-bg-variant="dark" header-text-variant="white" title="EIA Results Settings" hide-footer>
            <eia-results />
        </b-modal>

    </b-card>
</template>
<script>
import GenscreenForm from './Genscreen/GenscreenForm'
import { mapGetters } from 'vuex';
export default {
    components : {GenscreenForm},
    computed : {
        ...mapGetters(['eia_results']),
        genscreen_results(){
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

