<template>
    <div>
        <h3 class="text-primary">Stockyard</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Stockyard</li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                    <stockyard-form></stockyard-form>
                </div> <!-- end col-6 -->

                <div class="col-6">
                    <cryobox></cryobox>
                    <ref></ref>
                </div><!-- end col-6 -->
            </div> <!-- end row -->
        </div> <!-- end content -->
    </div><!-- main div-->
</template>

<script>
import StockyardForm from './Stockyard/StockyardForm'
import Cryobox from './Receive/RegisterLoc/Cryobox'
import Ref from './Receive/RegisterLoc/Ref'
export default {
    components : {StockyardForm,Cryobox, Ref},
}
</script>

<style>

</style>
