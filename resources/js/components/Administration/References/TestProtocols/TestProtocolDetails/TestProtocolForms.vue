<template>
    <div>
        <b-input-group class='mt-3 mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                New Name:
            </label>
            <b-input placeholder='Form Name' v-model='form.name' :disabled="loading"></b-input>
            <b-button slot="append" variant="success" @click="save">
                <span v-if="!loading"><i class="fa fa-check"></i> Create Form</span>
                <span v-if="loading"><i class="fa fa-spinner"></i> Saving, please wait..</span>
            </b-button>
        </b-input-group>
        <b-tabs small pills vertical>
            <b-tab v-for="(form,i) in protocol.forms" :key="i" :title="form.name">
                <fields :parentID="protocol.id" :protocol="form" :isroot="false" class="mt-3" />
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import Fields from './TestProtocolFields'
export default {
    components : {Fields},
    props : ['protocol'],
    data(){
        return {
            form : {name},
            loading : false,
        }
    },
    methods : {
        async save(){
            let {form} = this
            this.loading = true
            form.protocol_id = this.protocol.id
            let request = await this.$store.dispatch('test_protocol_form_new',form)
            this.form = {name : null}
            this.loading = false
        }
    }
}
</script>
