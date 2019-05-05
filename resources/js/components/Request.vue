<template>
    <div>
        <h3 class="text-primary">Confirmatory Request</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Confirmatory Request</li>
            <li class="breadcrumb-item"><router-link to="/checklist">Check for Confirmatory Test list</router-link></li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                    <request-form></request-form>
                </div>
                <div class="col-6">
                    <!-- <timeline></timeline> -->
                </div>
            </div>
        </div>
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
