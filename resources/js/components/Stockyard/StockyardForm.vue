<template>
    <div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-search"></i>&nbsp;
                        Confirmatory Request #:
                    </label>
                </div>
                <input type="text" aria-label="" placeholder="Scan /Enter Confirmatory Reference #" v-model="hasResult" class="form-control">       
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-barcode"></i>&nbsp;
                        Donation ID:
                    </label>
                </div>
                <input type="text" aria-label="Donation ID" placeholder="Donation ID" v-if="hasResult" v-model="donationID" class="form-control" disabled>      
                <input type="text" aria-label="Donation ID" placeholder="Donation ID" v-if="!hasResult" v-model="displayNone" class="form-control" disabled>
            </div>

            <h5 class="text-info mt-4">Cryobox Details</h5>
            <div class="input-group mb-3  col-12">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Cryobox #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Cryobox #" v-model="cryoboxnum" class="form-control" disabled>
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm text-center" @click="showCryoBox()" title="Add Cryobox details">+</button>
                </div>          
            </div> <!-- end input-group -->

            <div class="input-group mb-3  col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Slot #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Select Cryobox Slot #" v-model="cryoslot" class="form-control" disabled>        
            </div> <!-- end input-group -->
            <!-- CRYOBOX SECTION -->
            

            <h5 class="text-info mt-5">Ref Details</h5>
            <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Ref #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Ref #" v-model="refnum" class="form-control" disabled>
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm text-center" @click="showRef()" title="Add Ref details">+</button>
                </div>          
            </div> <!-- end input-group -->

            <!-- REF DEETAILS SECTION -->
            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Compartment #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Compartment #" v-model="refcomp" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Row #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Row #" v-model="refrow" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Column #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Column #" v-model="refcol" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <button type="button" class="btn btn-success btn-block mt-5 col-8" data-toggle="tooltip" 
            data-placement="left" title="Register Blood specimen location"><i class="fa fa-save"></i>&nbsp;REGISTER SPECIMEN LOCATION</button>

        </div><!-- end form-group -->
    </div><!-- main div -->
</template>

<script>
export default {
    data(){
        return{
            hasResult : '',
            confirmatoryNum : 'CTS019-000100',
            donationID : 'NVBSP20190001000',
            displayNone : '',
            cryoboxnum : '',
            cryoslot : '',
            refnum : '',
            refcomp : '',
            refrow : '',
            refcol : ''

        }
    },
}
</script>

<style>

</style>
