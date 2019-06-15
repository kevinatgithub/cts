<template>
    <div>
        <comp-url>Testing / Records</comp-url>
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
            <b-button variant="success" :title="btnTitle"><i class="fa fa-paper-plane"></i>&nbsp;SUBMIT RESULTS</b-button>
        </b-input-group>
    </div><!-- main div -->
</template>

<script>
export default {
    data(){
        return{
            disabled : true,
            btnTitle : 'Click to submit results',

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
    mounted(){
        
    }
}
</script>

<style>

</style>
