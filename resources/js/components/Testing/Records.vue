<template>
    <div>
        <div class="input-group mb-3" v-for="(result, i) in results" :key="i">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i :class="'fa fa-' + result.icon"></i>&nbsp;
                </span>
            </div>
            <input type="text" aria-label="Type-in your entry" placeholder="Type-in your entry" v-model="result.row"  class="form-control" >
            <select class="custom-select" id="inputGroupSelect01">
                <option selected></option>
                <option v-for="(test, i) in tests" :key="i">{{ test.val }}</option>
            </select>

        </div><!-- input group -->
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="fa fa-file"></i>&nbsp; FINAL INTERPRETATION
                </span>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
                <option selected></option>
                <option v-for="(test, i) in tests" :key="i">{{ test.val }}</option>
            </select>
        </div>

        <div class="row col-8 mt-5">
            <button type="button" class="btn btn-success btn-block" data-toggle="tooltip" 
                data-placement="left" :title="btnTitle"><i class="fa fa-paper-plane"></i>&nbsp;SUBMIT RESULTS</button>
        </div>
    </div><!-- main div -->
</template>

<script>
export default {
    data(){
        return{
            disabled : true,
            btnTitle : 'Click to submit results',

            results:[
                { row : 'TEST 1', icon : 'circle' },
                { row : 'TEST 2', icon : 'circle' },
                { row : 'TEST 3', icon : 'circle' },
            ],

            tests: [
                { val: 'POSITIVE' },
                { val: 'NEGATIVE' }
            ],
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>
