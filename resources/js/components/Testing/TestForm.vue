<template>
    <div>
        <comp-url>Testing / TestForm</comp-url>
        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;Confirmatory Request #:
            </label>
            <b-input placeholder="Scan /Enter Confirmatory Reference #" v-model="confirmatoryNum"></b-input>
            <b-form-select v-model="hasResult" :options="results"></b-form-select>
        </b-input-group>

        <!-- IF USER SELECTS FROM THE SELECT BOX -->
        <div v-if="hasResult" class="mt-5">
                <!-- <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div> -->
            <records></records> 
        </div>
        <div v-if="!hasResult" class="text-center">
            No records to display   
        </div>
        <!-- IF USER SELECTS FROM THE SELECT BOX -->
        
    </div><!-- main div -->
</template>

<script>
import Records from './Records'
export default {
    components: {Records},
    data(){
        return{
            //CTS2019-000001
            confirmatoryNum : '', 
            hasResult: false,

            results: [
                { text : 'HEP C' },
                { text : 'HEP B' },
                { text : 'HIV' },
                { text : 'MALARIA' },
                { text : 'SYPHILIS' },
            ],
        }
    },
    computed: {
       
    }
}
</script>

<style>

</style>
