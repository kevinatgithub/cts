<template>
    <div>
        <b-row>
            <b-col cols="8">
                <b-row>
                    <b-col cols="12" class="mt-1">
                        <b-input-group size="sm">
                            <label class='input-group-text' style="width:150px;" slot='prepend'>
                                Report Title:
                            </label>
                            <b-input placeholder='Report Title' v-model='form.name'></b-input>
                        </b-input-group>
                    </b-col>
                    <b-col cols="12" class="mt-1">
                        <b-input-group size="sm">
                            <label class='input-group-text' style="width:150px;" slot='prepend'>
                                Report Type:
                            </label>
                            <b-form-select v-model="form.report_type" :options="report_types"></b-form-select>
                        </b-input-group>
                    </b-col>
                    <b-col cols="12" class="mt-1">
                        <b-input-group size="sm">
                            <label class='input-group-text' style="width:150px;" slot='prepend'>
                                Source:
                            </label>
                            <b-form-select v-model="form.source" :options="report_sources"></b-form-select>
                        </b-input-group>
                    </b-col>
                </b-row> 
            </b-col>
        </b-row>

        <html-editor class="mt-1" :report="form"></html-editor>

        <b-row>
            <b-col class="mt-3">
            <b-button variant="success" @click="performSave">Save Changes</b-button>
            <router-link to="/references/report_templates"><b-button variant="dark"><i class="fa fa-arrow-left"></i> Back to List</b-button> </router-link>
            </b-col>
        </b-row>

    </div>
</template>
<script>
import {content} from './defaultcontent'
import HtmlEditor from '../../../App/HtmlEditor'
import { mapGetters } from 'vuex';
export default {
    components : {HtmlEditor},
    data(){
        return {
            form : {
                html : content, name : null, report_type : null, source : null,
            },
            report_types : [
                // 'Result', 'Machine Report', 'Logbook', 'List',
                'Result', 'Template',
            ]
        }
    },
    computed : {
        ...mapGetters(['test_protocols']),
        report_sources(){
            if(this.form.report_type == "Result" || this.form.report_type == "Logbook"){
                return ['HIV','HBV','HCV','MAL','SYP']
            }else if(this.form.report_type == "Machine Report"){
                let options = []
                this.test_protocols.forEach(p=>{
                    options.push({
                        value : p.id, text : p.name
                    })
                })
                return options
            }else{
                return []
            }
        }
    },
    methods : {
        async performSave(){
            let {form} = this
            let response = await this.$store.dispatch("newReport",form)
            this.$router.push("/references/report_templates")
        }
    }
}
</script>
