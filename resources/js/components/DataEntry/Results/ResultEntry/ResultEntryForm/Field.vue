<template>
    <div>
        
        <div v-if="field.type == 'text' || field.type == 'date'">
            <b-input-group size="sm">
                <label class='input-group-text' slot='prepend' style="min-width:170px;">
                    <i class='fa fa-book'></i>&nbsp;
                    {{field.name}}:
                </label>
                <b-input :type="field.type" :placeholder="field.name"></b-input>
            </b-input-group>
        </div>

        <div v-if="field.type == 'select'">
            <b-input-group size="sm">
                <label class='input-group-text' slot='prepend' style="min-width:170px;">
                    <i class='fa fa-book'></i>&nbsp;
                    {{field.name}}:
                </label>
                <b-form-select :options="form_options"></b-form-select>
                <b-button slot="append" @click="$bvModal.show('settings-'+ckey)"><i class="fa fa-cog"></i></b-button>
            </b-input-group>

            <b-modal :id="'settings-'+ckey" :title="field.source" header-bg-variant="dark" header-text-variant="white" hide-footer>
                <options-crud-wrapper :category="field.source" @hasChange="loadOptions" />
            </b-modal>
        </div>
    </div>
</template>
<script>
import OptionsCrudWrapper from '../../../../Administration/References/OptionsRegistry/OptionsCrudWrapper'
export default {
    components : {OptionsCrudWrapper},
    props : ['field'],
    data(){
        return {
            form_options : []
        }
    },
    mounted(){
        this.loadOptions()
    },
    computed : {
        ckey(){
            return Math.random()
        }
    },
    methods : {
        async loadOptions(){
            let request = await this.$store.dispatch('options_get',{category : this.field.source})
            let response = request.data
            let options = []
            response.forEach(o=>{
                options.push(o.name)
            })
            this.form_options = options
        }
    }
}
</script>

