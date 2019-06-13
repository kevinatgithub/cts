<template>
    <div>
        <comp-url>Request</comp-url>
        <h3 class="text-primary">Confirmatory Request</h3>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Confirmatory Request', href: '#'},
            {text: 'Check for Confirmatory Test list', active :true}
        ]"></b-breadcrumb>

        <b-row>
            <b-col>
                <request-form></request-form>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>

<script>
import RequestForm from './Request/RequestForm'
import Timeline from './Timeline'
export default {
    components : {Timeline,RequestForm}    
}
</script>

<style>

</style>
