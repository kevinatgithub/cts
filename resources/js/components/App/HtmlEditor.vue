<template>
    <div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    props : ['report'],
    data() {
        window.CK = ClassicEditor
        return {
            editor: ClassicEditor,
            editorData: this.report.html,
            editorConfig: {
                // The configuration of the rich-text editor..
                removePlugins: [ 'ImageUpload', 'MediaEmbed', 'Link' ],
            }
        };
    },
    watch : {
        editorData(){
            this.editorData = this.editorData.replace("[[logo]]","<img src='img/ritm_logo2.png' />")
            this.editorData = this.editorData.replace("[[header]]","<table><tr><td><img src='img/ritm_logo2.png' /></td><td align='center'>RESEARCH INSTITUTE FOR TROPICAL MEDICINE</td></tr></table>")
            window.mydata = this.editorData
        }
    }
}
</script>