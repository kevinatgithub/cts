<template>
    <div>
         <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                ARCHITECT S/CO {{kit}}:
            </label>
            <b-input></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                CUT-OFF VALUE {{kit}}:
            </label>
            <b-input></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION {{kit}}:
            </label>
            <b-form-select :options="architect_interpretation"></b-form-select>
            <b-button v-b-modal.eia-settings slot="append"><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                DATE TESTED {{kit}}:
            </label>
            <b-input type="date"></b-input>
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
        architect_interpretation(){
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
