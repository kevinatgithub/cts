<template>
    <div>
        <h3 class="text-primary">Receive Blood Sample</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Receive Blood Sample</li>
        </ol>
        
        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                    <details-form></details-form>
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
import DetailsForm from './Receive/DetailsForm'

export default {
    components: {Timeline,DetailsForm},
    
}
</script>


<style>

</style>
