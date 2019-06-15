<template>
    <div>
        <comp-url>Report / ReportForm</comp-url>
        <b-form-group>
            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-search"></i>&nbsp;Confirmatory Request #:
                </label>
                <b-input placeholder="Scan /Enter Confirmatory Reference #" v-model="hasResult"></b-input>
            </b-input-group>
            
            <h5 class="text-info mt-5">Report Summary</h5>

            <div class="mb-5" v-if="hasResult">
                <preview-result :csnum="confirmatoryNum" :donationID="donationID" :finalMsg="finalMsg" :finalResult="finalResult"></preview-result>
            </div>

            <div v-if="!hasResult" class="text-center mb-5">
                No records to display
            </div>

        </b-form-group>

        <div class="mb-5">&nbsp;</div> 

        <b-row class="mt-5">
            <b-col cols="8">
                <b-button variant="success" block :title="btnTitle"><i class="fa fa-print"></i>&nbsp;SUBMIT RESULT TO BSF</b-button>
            </b-col>
        </b-row>        

    </div><!-- main -->
</template>

<script>
import PreviewResult from './PreviewResult'

export default {
    components : {PreviewResult},
    data(){
        return {
            hasResult : '',
            finalResult : 'POSITIVE',
            // CTS2019-000001
            confirmatoryNum : 'CTS2019-000001', 
            // NVBSP20190001000
            donationID : 'NVBSP20190001000',
            finalMsg : '* The result shown above is final result, it is done with multiple test and cannot be changed in any cause.',
            btnTitle : 'Click to submit generated report to BSF',
        }
    }
}
</script>

<style>

</style>
