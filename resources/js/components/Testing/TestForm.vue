<template>
    <div>
        <comp-url>Testing / TestForm</comp-url>
        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;CR #:
            </label>
            <b-input placeholder="Scan /Enter Confirmatory Reference #" v-model="confirmatory_refererence_number"></b-input>
            <b-form-select v-model="hasResult" :options="tti" style="max-width:150px;"></b-form-select>
        </b-input-group>

        <!-- IF USER SELECTS FROM THE SELECT BOX -->
        <div v-if="hasResult" class="mt-3">
                
            <b-input-group class="mb-3" v-for="(result,i) in results" :key="i">
                <label for="" class="input-group-text" slot="prepend">
                    <i :class="'fa fa-'+result.icon"></i>&nbsp;
                </label>
                <b-input placeholder="" v-model="result.row"></b-input>
                <b-form-select :options="tests"></b-form-select>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-file"></i>&nbsp; FINAL INTERPRETATION
                </label>
                <b-form-select :options="tests"></b-form-select>
            </b-input-group>
            
            <b-input-group class="mb-3">
                <b-button variant="success"><i class="fa fa-paper-plane"></i>&nbsp;SUBMIT RESULTS</b-button>
            </b-input-group>

        </div>
        <div v-if="!hasResult" class="text-center">
            No records to display   
        </div>
        <!-- IF USER SELECTS FROM THE SELECT BOX -->
        
    </div><!-- main div -->
</template>

<script>

export default {
    data(){
        return{
            confirmatory_refererence_number : null,
            hasResult: false,

            tti: [
                { text : 'HEP C' },
                { text : 'HEP B' },
                { text : 'HIV' },
                { text : 'MALARIA' },
                { text : 'SYPHILIS' },
            ],

            results:[
                { row : 'TEST 1', icon : 'tint' },
                { row : 'TEST 2', icon : 'tint' },
                { row : 'TEST 3', icon : 'tint' },
            ],

            tests: [
                { text: 'POSITIVE' },
                { text: 'NEGATIVE' }
            ],
        }
    },
    computed: {
       
    }
}
</script>

<style>

</style>
