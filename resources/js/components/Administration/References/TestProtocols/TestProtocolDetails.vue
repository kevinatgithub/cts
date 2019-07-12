<template>
    <b-card>
        <b-row>
            <b-col cols="3">
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        TTI:
                    </label>
                    <b-form-select v-model="form.tti" :options="tti_options"></b-form-select>
                </b-input-group>
            </b-col>
            <b-col>
                <b-input-group class='mb-3' size="sm">
                    <label class='input-group-text' slot='prepend'>
                        Machine Name:
                    </label>
                    <b-input placeholder='Machine Name' v-model='form.name'></b-input>
                </b-input-group>
            </b-col>
            <b-col cols="2">
                <b-button variant="dark" v-if="hasChanges" size="sm" @click="save">Save Changes</b-button>
            </b-col>
        </b-row>

        <b-tabs small>
            <b-tab title="Fields">
                <fields :protocol="protocol" class="mt-1" :isroot="true" />
            </b-tab>
            <b-tab title="Forms">
                <forms :protocol="protocol" />
            </b-tab>
        </b-tabs>        
    </b-card>
</template>

<script>
import Fields from './TestProtocolDetails/TestProtocolFields'
import Forms from './TestProtocolDetails/TestProtocolForms'
export default {
    components : {Fields,Forms},
    props : ['protocol'],
    data(){
        return {
            tti_options : [
                'HIV', 'HBV', 'HCV', 'MAL', 'SYP',
            ],
            form : _.clone(this.protocol)
        }
    },
    computed : {
        hasChanges(){
            return !_.isEqual(this.protocol,this.form)
        }
    },
    methods : {
        async save(){
            let request = await this.$store.dispatch('test_protocol_update',{protocol : this.form})
            _.extend(this.protocol,this.form)
            this.$emit('hasChange')
        }
    }
}
</script>
