<template>
    <b-card no-body>
        <b-tabs>
            <b-tab title="ARCHITECT 1">
                <test-card class="mt-3" kit="1"></test-card>
            </b-tab>
            <b-tab title="ARCHITECT 2">
                <test-card class="mt-3" kit="2"></test-card>
            </b-tab>
            <b-tab title="ARCHITECT 3">
                <test-card class="mt-3" kit="3"></test-card>
            </b-tab>
        </b-tabs>

        <b-input-group size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                <i class='fa fa-book'></i>&nbsp;
                ARCHITECT FINAL INTERPRETATION:
            </label>
            <b-form-select :options="interpretation_options"></b-form-select>
            <b-button slot="append" v-b-modal.eia-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group> 
    </b-card>
</template>
<script>
import TestCard from './TestCard'
import { mapGetters } from 'vuex';
export default {
    components : {TestCard},
    computed : {
        ...mapGetters(['eia_results']),
        interpretation_options(){
            let options = []
            this.eia_results.forEach(o=>{
                options.push(o.name)
            })
            return options
        }
    }
}
</script>

