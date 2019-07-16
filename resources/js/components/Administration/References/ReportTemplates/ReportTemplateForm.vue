<template>
    <div>
        <b-row>
            <b-col>
                <b-input-group size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Report Title:
                    </label>
                    <b-input placeholder='Report Title' v-model='form.name'></b-input>
                </b-input-group>

            </b-col>
            <b-col>
                <b-input-group size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Report Type:
                    </label>
                    <b-form-select v-model="form.report_type" :options="report_types"></b-form-select>
                </b-input-group>
            </b-col>
            <b-col>
                <b-input-group size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Source:
                    </label>
                    <b-form-select :options="report_sources"></b-form-select>
                </b-input-group>
            </b-col>
        </b-row>

        <html-editor class="mt-1" :report="form"></html-editor>
    </div>
</template>
<script>
import HtmlEditor from '../../../App/HtmlEditor'
import { mapGetters } from 'vuex';
export default {
    components : {HtmlEditor},
    data(){
        return {
            form : {
                html : "", name : null, report_type : null,
            },
            report_types : [
                'Result', 'Machine Report', 'Logbook', 'List'
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
    }
}
</script>
