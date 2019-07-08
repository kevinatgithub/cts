<template>
    <b-card>
        <b-card-text>BIORAD GEENIUS</b-card-text>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION:
            </label>
            <b-form-select :options="int_options"></b-form-select>
            <b-button slot="append" v-b-modal.geenius-hiv-interpretation-settings><i class="fa fa-cog"></i></b-button>
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
            <b-form-select :options="int_options"></b-form-select>
            <b-button slot="append" v-b-modal.geenius-hiv-interpretation-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-modal id="geenius-hiv-interpretation-settings" header-bg-variant="dark" header-text-variant="white" title="GEENIUS HIV INTERPRETATIONS" hide-footer>
            <geenius-hiv-interpretations></geenius-hiv-interpretations>
        </b-modal>
    </b-card>
</template>
<script>
import { mapGetters } from 'vuex';
import GeeniusHivInterpretations from '../../../../../Administration/References/GeeniusHivInterpretations'
export default {
    components : {GeeniusHivInterpretations},
    computed : {
        ...mapGetters(['geenius_hiv_interpretation']),
        int_options(){
            let options = []
            this.geenius_hiv_interpretation.forEach(o=>{
                options.push(o.name)
            })
            return options
        }
    }
}
</script>

