<template>
    <div>
        <h3 class="text-primary">Confirmatory Test</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Confirmatory Test</li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                    <test-form></test-form>
                </div> <!-- end col-6 -->

                <div class="col-6">
                    <timeline></timeline>
                </div><!-- end col-6 -->
            </div> <!-- end row -->
        </div> <!-- end content -->
        
        
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
