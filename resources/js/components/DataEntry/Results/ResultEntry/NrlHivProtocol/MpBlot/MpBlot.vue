<template>
    <b-card>
        <b-card-text>MP BLOT HIV 2.0</b-card-text>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION:
            </label>
            <b-form-select :options="options"></b-form-select>
            <b-button slot="append" v-b-modal.westernblot-hiv-settings><i class="fa fa-cog"></i></b-button>
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

        <b-modal id="westernblot-hiv-settings" header-bg-variant="dark" header-text-variant="white" title="Westernblot HIV Results" hide-footer>
            <westernblot-hiv />
        </b-modal>
    </b-card>
</template>
<script>
import WesternblotHiv from '../../../../../Administration/References/WesternblotHiv'
import { mapGetters } from 'vuex';
export default {
    components : {WesternblotHiv},
    computed : {
        ...mapGetters(['westernblot_hiv']),
        options(){
            if(!this.westernblot_hiv){
                return []
            }
            let options = []
            this.westernblot_hiv.forEach(o=>{
                options.push(o.name)
            })
            return options
        }
    }
}
</script>

