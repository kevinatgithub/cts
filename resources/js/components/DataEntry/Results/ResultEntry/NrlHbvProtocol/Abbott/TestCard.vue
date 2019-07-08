<template>
    <div>
        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                S/CO {{kit}}:
            </label>
            <b-input></b-input>
        </b-input-group>
        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION {{kit}}:
            </label>
            <b-form-select :options="interpretation_options"></b-form-select>
            <b-button slot="append" v-b-modal.eia-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>
        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                DATE TESTED {{kit}}:
            </label>
            <b-input></b-input>
        </b-input-group>
        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                REMARKS {{kit}}:
            </label>
            <b-input></b-input>
        </b-input-group>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props : ['kit'],
    computed : {
        ...mapGetters(['eia_results']),
        interpretation_options(){
            let options = []
            this.eia_results.forEach(o=>{
                options.push(o.name)
            })
            return options
        },
    }
}
</script>

