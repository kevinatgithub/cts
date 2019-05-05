<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                    <i class="fa fa-barcode"></i>&nbsp;
                </label>
            </div>
            <input type="text" aria-label="REF-#" placeholder="Scan /Enter Donation ID" v-model="hasResult" class="form-control">
        </div> <!-- end input-group -->

        <h5 class="text-info">Specimen Details</h5>
        <div class="form-group mt-5" v-if="hasResult">

            <div class="row">
                <label class="col-sm-5" for="inputDefault"><strong>Blood Type:</strong></label>
                <label class="col-form-label col-sm-7" id="inputDefault">{{bloodtype}}</label>
            </div>

            <div class="row">
                <label class="col-sm-5" for="inputDefault"><strong>Reactive for:</strong></label>
                <label class="col-form-label col-sm-7" id="inputDefault">{{tti}}</label>
            </div>

            <div class="row">
                <label class="col-sm-5" for="inputDefault"><strong>Date Collected:</strong></label>
                <label class="col-form-label col-sm-7" id="inputDefault">{{date}}</label>
            </div>

            <div class="row">
                <div class="input-group mb-5">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">
                            <i class="fa fa-tint"></i>&nbsp;
                            Specimen type:
                        </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected></option>
                        <option v-for="(specimen, i) in specimens" :key="i">{{ specimen.val }}</option>
                    </select>
                </div> <!-- end input-group -->
            </div>

            <h5 class="text-info mt-3">Final Interpretation</h5>

            <div class="row">
                <label class="col-sm-5" for="inputDefault"><strong>Confirmatory Request #:</strong></label>
                <label class="col-form-label col-sm-7 text-primary" id="inputDefault">{{confirmatoryNum}}</label>
            </div>

            <div class="row">
                <label class="col-sm-5" for="inputDefault"><strong>Final Interpretation:</strong></label>
                <label class="col-form-label col-sm-7 text-primary" id="inputDefault">{{finalResult}}</label>
            </div>
            

            <div class="row col-8 mt-5">
                <button type="button" class="btn btn-success btn-block" data-toggle="tooltip" 
                    data-placement="left" :title="btnTitle"><i class="fa fa-paper-plane"></i>&nbsp;SUBMIT REQUEST FOR CONFIRMATORY TESTING</button>
            </div>
        </div>

        <div class="text-center" v-if="!hasResult">
            No records to display
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            hasResult : '',

            // NVBSP20190001000
            donationID : '',
            bloodtype : 'A POS',
            tti : 'HIV',
            date : 'Mon, Nov. 05, 2018 06:42:55PM',
            txtareamsg : 'sample remarks',
            btnTitle : 'Click submit request for confirmatory testing to ritm',

            confirmatoryNum : 'None',
            finalResult : 'None',

            specimens : [
                { val : 'SPL 1' },
                { val : 'SPL 2' },
            ],

        }
    }
}
</script>

<style>

</style>
