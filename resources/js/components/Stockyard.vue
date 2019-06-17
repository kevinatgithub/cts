<template>
    <div>
        <comp-url>Stockyard</comp-url>
        <h3 class="text-primary">Stockyard</h3>
        <hr>
        <b-breadcrumb :items="[
            {text : 'Stockyard', active : true}
        ]"></b-breadcrumb>

        <b-row class="mt-5">
            <b-col>
                <stockyard-form></stockyard-form>
            </b-col>
            <b-col>
                <cryobox></cryobox>
                <!-- <ref></ref> -->
            </b-col>
        </b-row>
    </div><!-- main div-->
</template>

<script>
import StockyardForm from './Stockyard/StockyardForm'
import Cryobox from './Receive/RegisterLoc/Cryobox.vue'
import Ref from './Receive/RegisterLoc/Ref'
export default {
    components : {StockyardForm,Cryobox, Ref},
}
</script>

<style>

</style>
