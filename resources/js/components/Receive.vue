<template>
    <div>
        <comp-url>Receive</comp-url>
        <h3 class="text-primary">Receive Blood Sample</h3>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Receive Blood Sample', active: true},
        ]"></b-breadcrumb>
        
        <b-row class="mt-5">
            <b-col>
                <details-form></details-form>
            </b-col>
            <b-col>
                <timeline></timeline>
            </b-col>
        </b-row>
        
        
    </div>    
</template>

<script>
import Timeline from './Timeline'
import DetailsForm from './Receive/DetailsForm'

export default {
    components: {Timeline,DetailsForm},
    
}
</script>


<style>

</style>
