<template>
    <b-card border-variant="dark">
        <b-row>
            <b-col>
                <b-button class="pull-right" size="sm" v-b-modal.test-method-settings><i class="fa fa-cog"></i></b-button>
                <b-card-text>NRL Kit Method:</b-card-text>
                <b-row>
                    <b-col sm="12" md="6" lg="4" v-for="(m,i) in methods" :key="i">
                        <b-form-checkbox
                            v-model="form.methods"
                            :value="m"
                            nowrap
                        >
                            {{m}}
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-medkit'></i>&nbsp;
                        RITM FINAL STATUS:
                    </label>
                    <b-form-select v-model="form.final_status" :options="results"></b-form-select>
                    <b-button slot="append" v-b-modal.result-options-settings><i class="fa fa-cog"></i></b-button>
                </b-input-group>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-comments'></i>&nbsp;
                        RITM FINAL STATUS REMARKS:
                    </label>
                    <b-form-select v-model="form.final_status_remarks" :options="results"></b-form-select>
                    <b-button slot="append" v-b-modal.result-options-settings><i class="fa fa-cog"></i></b-button>
                </b-input-group>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-calendar'></i>&nbsp;
                        Date Encoded:
                    </label>
                    <b-input placeholder='Date Encoded' v-model='form.encoded_dt' readonly></b-input>
                </b-input-group>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-user'></i>&nbsp;
                        Results Encoded By:
                    </label>
                    <b-input placeholder='' v-model='user.name' readonly></b-input>
                </b-input-group>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-folder-open'></i>&nbsp;
                        Report Type:
                    </label>
                    <b-form-select v-model="form.report_type" :options="report_types"></b-form-select>
                </b-input-group>
            </b-col>
        </b-row>

        <b-modal id="test-method-settings" header-bg-variant="dark" header-text-variant="white" title="NRL Kit Method Settings" hide-footer>
            <kit-method />
        </b-modal>

        <b-modal id="result-options-settings" header-bg-variant="dark" header-text-variant="white" title="RITM Final Status Settings" hide-footer>
            <result-options />
        </b-modal>
    </b-card>
</template>
<script>
import KitMethod from '../../../Administration/References/KitMethod'
import ResultOptions from '../../../Administration/References/ResultOptions'
import {mapGetters} from 'vuex'
export default {
    components : {KitMethod,ResultOptions},
    data(){
        return {
            form : {
                methods : [],
                encoded_dt : new Date().toDateString()
            },
            report_types : [
                'Initial', 'Donor Follow-up', 'Others'
            ]
        }
    },
    computed : {
        ...mapGetters(['kit_methods','result_options']),
        user(){
            return this.$session.get('user')
        },
        methods(){
            if(!this.kit_methods){
                return []
            }
            let methods = []
            this.kit_methods.forEach(m=>{
                methods.push(m.name)
            })
            return methods
        },
        results(){
            if(!this.result_options){
                return []
            }
            let results = []
            this.result_options.forEach(r=>{
                results.push(r.name)
            })
            return results
        }
    }
}
</script>
