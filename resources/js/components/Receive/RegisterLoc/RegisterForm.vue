<template>
    <div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-hashtag"></i>&nbsp;
                        Confirmatory Request #:
                    </label>
                </div>
                <input type="text" aria-label="Donation ID" placeholder="Scan /Enter Donation ID" v-model="confirmatoryNum" class="form-control" disabled>      
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-barcode"></i>&nbsp;
                        Donation ID:
                    </label>
                </div>
                <input type="text" aria-label="Donation ID" placeholder="Scan /Enter Donation ID" v-model="donationID" class="form-control" disabled>      
            </div>
        </div>

        <h5 class="text-info mt-4">Cryobox Details</h5>
        <div class="form-group">
            <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cubes"></i>&nbsp;
                        Cryobox #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="cryoboxnum" class="form-control" disabled>
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm text-center" @click="showCryoBox()" title="Add Cryobox details">+</button>
                </div>          
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cubes"></i>&nbsp;
                        Slot #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="cryoslot" class="form-control" disabled>        
            </div> <!-- end input-group -->
            <!-- CRYOBOX SECTION -->
        </div>

        <div class="form-group mb-5">
        <h5 class="text-info mt-4">Ref Details</h5>
            <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cube"></i>&nbsp;
                        Ref #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refnum" class="form-control" disabled>
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm text-center" @click="showRef()" title="Add Cryobox details">+</button>
                </div>          
            </div> <!-- end input-group -->

            <!-- REF DEETAILS SECTION -->
            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cube"></i>&nbsp;
                        Compartment #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refcomp" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cube"></i>&nbsp;
                        Row #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refrow" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-cube"></i>&nbsp;
                        Column #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refcol" class="form-control" disabled>        
            </div> <!-- end input-group -->
        </div>

        <button type="button" class="btn btn-success btn-block mr-5 col-8" data-toggle="tooltip" 
            data-placement="left" title="Register Blood specimen location"><i class="fa fa-save"></i>&nbsp;REGISTER SPECIMEN LOCATION</button>


        
    </div>
</template>

<script>
export default {
    data(){
        return{
            confirmatoryNum : 'CTS019-000100',
            donationID : 'NVBSP20190001000',
            cryoboxnum : '19-017',
            cryoslot : '51',
            refnum : 'REF000-12F',
            refcomp : '3',
            refrow : '2',
            refcol : '4'

        }
    },
}
</script>

<style>

</style>
