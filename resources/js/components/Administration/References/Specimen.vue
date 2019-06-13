<template>
    <div>
        <comp-url>Administration / References / Specimen</comp-url>
        <h5>Specimen</h5>
        <hr>
        <b-form-group>
            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    {{update ? "Update":"New"}} Specimen:
                </label>
                <b-input placeholder='Specimen Name' v-model='specimen'></b-input>
                <b-button slot="append" variant="success" @click="doSave"><i class="fa fa-check"></i></b-button>
                <b-button slot="append" v-if="specimen" @click="update = null; specimen = null;" variant="danger"><i class="fa fa-remove"></i></b-button>
            </b-input-group>
        </b-form-group>
        <b-button variant="danger" v-if="update" size="sm" v-b-modal.confirm>Delete Selected Specimen</b-button>
        <b-table class="mt-3" selectable :items="specimens" :striped="true" select-mode="single" @row-selected="specimenSelected" select-variant="success">

        </b-table>
        <b-modal id="confirm" title="Delete Specimen" @ok="deleteSelected" header-bg-variant="danger" header-text-variant="light">
            Are you sure you want to delete selected Specimen?
        </b-modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            specimen : null, specimens : [
                { id : 0, name : 'SPL 1'},
                { id : 1, name : 'SPL 2'},
            ], update : null
        }
    },
    methods : {
        doSave(){
            if(this.update && this.specimen){
                this.update.name = this.specimen
                this.specimen = null
            }
            if(this.specimen != null){
                this.specimens.push({
                    id : this.specimens.length, name : this.specimen
                })
                this.specimen = null
            }
        },
        specimenSelected(item){
            this.update = item[0]
            this.specimen = item[0].name
        },
        deleteSelected(){
            this.specimens = _.remove(this.specimens,{id : this.update.id*1})
            this.specimen = null
            this.update = null
        }
    }
}
</script>
