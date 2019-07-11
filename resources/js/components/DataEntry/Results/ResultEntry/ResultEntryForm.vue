<template>
    <b-card bg-variant="white">
        <b-tabs>
            <b-tab v-for="(form,i) in proto.forms" :key="i" :title="form.name">
                <field v-for="(field,i) in form.fields" :key="i" :pkey="i" :field="field" class="mt-3" />
            </b-tab>
        </b-tabs>

        <field v-for="(field,i) in proto.fields" :key="i" :pkey="i" :field="field" class="mt-3" />

    </b-card>
</template>
<script>
import Field from './ResultEntryForm/Field'
export default {
    components : {Field},
    props : ['proto'],
}
</script>
