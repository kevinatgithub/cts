<template>
    <div>
        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                SERODIA HIV 1 - {{kit}}:
            </label>
            <b-form-select :options="serodia_hiv_options"></b-form-select>
            <b-button slot="append" v-b-modal.fujirebio-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                SERODIA HIV 2 - {{kit}}:
            </label>
            <b-form-select :options="serodia_hiv_options"></b-form-select>
            <b-button slot="append" v-b-modal.fujirebio-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                SERODIA HIV 1/2 INT {{kit}}:
            </label>
            <b-form-select :options="serodia_hiv_interpretaion_options"></b-form-select>
            <b-button slot="append" v-b-modal.fujirebio-settings><i class="fa fa-cog"></i></b-button>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                DATE TESTED {{kit}}:
            </label>
            <b-input type="date" v-model="form.tested_dt"></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                SERODIA HIV REMARKS {{kit}}:
            </label>
            <b-input v-model="form.remarks"></b-input>
        </b-input-group>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props : ['kit'],
    data(){
        return {
            form : {
                tested_dt : null
            }
        }
    },
    computed : {
        ...mapGetters(['serodia_hiv','serodia_hiv_final_status_results']),
        serodia_hiv_options(){
            let options = []
            this.serodia_hiv.forEach(s=>{
                options.push(s.name)
            })
            return options
        },
        serodia_hiv_interpretaion_options(){
            let options = []
            this.serodia_hiv_final_status_results.forEach(s=>{
                options.push(s.name)
            })
            return options
        }
    }
}
</script>

