<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                    <i class="fa fa-search"></i>&nbsp;
                </label>
            </div>
            <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="confirmatoryNum" class="form-control">
            <select class="custom-select" id="inputGroupSelect01" v-model="hasResult">
                <option selected></option>
                <option v-for="(result, i) in results" :key="i">{{result.ttival}}</option>
            </select>
        </div> <!-- end input-group -->

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
            //CTS#2019-000001
            confirmatoryNum : '', 
            hasResult: false,

            results: [
                { ttival : 'HEP C' },
                { ttival : 'HEP B' },
                { ttival : 'HIV' },
                { ttival : 'MALARIA' },
                { ttival : 'SYPHILIS' },
            ],
        }
    },
    computed: {
       
    }
}
</script>

<style>

</style>
