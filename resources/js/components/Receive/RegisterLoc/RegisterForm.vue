<template>
    <div>
        <div class="form-group">
            <div class="row">
                <label for="staticRef" class="col-sm-4 col-form-label"><strong>Confirmatory Request #:</strong></label>
                <div class="col-sm-8">
                    <label class="col-form-label" id="staticRef">{{confirmatoryNum}}</label>
                </div>
            </div>

            <div class="row mt-3">
                <label for="staticDonation" class="col-sm-4 col-form-label"><strong>Donation ID:</strong></label>
                <div class="col-sm-8">
                    <label class="col-form-label" id="staticDonation">{{donationID}}</label>
                </div>
            </div>
        </div>

        <h5 class="text-info mt-4">Cryobox Details</h5>
        <div class="form-group">
            <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Cryobox #:</strong>
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
                        <strong>Slot #:</strong>
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
                        <strong>Ref #:</strong>
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
                        <strong>Compartment #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refcomp" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Row #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refrow" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <strong>Column #:</strong>
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="refcol" class="form-control" disabled>        
            </div> <!-- end input-group -->
        </div>

        <button type="button" class="btn btn-success btn-block mr-5 col-8" data-toggle="tooltip" 
            data-placement="left" title="Register Blood sample location"><i class="fa fa-save"></i>&nbsp;REGISTER BLOOD SAMPLE LOCATION</button>


        
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
