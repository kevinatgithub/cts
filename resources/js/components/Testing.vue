<template>
    <div>
        <comp-url>Testing</comp-url>
        <h3 class="text-primary">Confirmatory Test</h3>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Confirmatory Test', active: true},
        ]"></b-breadcrumb>

        <b-row class="mt-5">
            <b-col>
                <test-form></test-form>
            </b-col>
            <b-col>
                <timeline></timeline>
            </b-col>
        </b-row>
        
    </div>    
</template>

<script>
import Timeline from './Timeline'
import TestForm from './Testing/Testform'
export default {
    components: {Timeline, TestForm}
}
</script>

<style>

</style>
