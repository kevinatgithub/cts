<template>
    <div>
        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend'>
                Report Title:
            </label>
            <b-input placeholder='Report Title' v-model='form.name'></b-input>
        </b-input-group>

        <html-editor :report="form"></html-editor>
    </div>
</template>
<script>
import HtmlEditor from '../../../App/HtmlEditor'
export default {
    components : {HtmlEditor},
    data(){
        return {
            form : {
                html : "", name : null,
            }
        }
    },
}
</script>
