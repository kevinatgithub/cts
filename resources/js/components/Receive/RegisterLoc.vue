<template>
    <div>
        <comp-url>Receive / RegisterLoc</comp-url>
        <h3 class="text-primary">Register Specimen Location</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/receiving">Receive Blood Sample</router-link></li>
            <li class="breadcrumb-item active">Register Specimen Location</li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                    <register-form></register-form>
                </div> <!-- end col-6 -->

                <div class="col-6">

                    <div class="row mt-3">
                        <cryobox></cryobox>
                    </div>

                    <div class="row mt-3">
                        <ref></ref>
                    </div>
                </div> <!-- end col-6 -->

            </div> <!-- end row -->
            
        </div> <!-- end content-->
    </div>
</template>

<script>
import RegisterForm from './RegisterLoc/RegisterForm.vue'
import Cryobox from './RegisterLoc/Cryobox.vue'
import Ref from './RegisterLoc/Ref.vue'

export default {
    components : {Cryobox, Ref, RegisterForm},
    data(){
        return {
           
            
        }
    },
    
}
</script>

<style>

</style>
