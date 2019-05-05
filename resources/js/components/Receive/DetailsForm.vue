<template>
    <div>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                    <i class="fa fa-search"></i>&nbsp;
                    Donation ID:
                </label>
            </div>
            <input type="text" aria-label="Donation ID" placeholder="Scan /Enter Donation ID" v-model="hasResult" class="form-control">          
        </div> <!-- end input-group -->

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                    <i class="fa fa-pencil"></i>&nbsp;
                    Confirmatory Request #:
                </label>
            </div>
            <input type="text" aria-label="Confirmatory Request #" placeholder="Scan /Enter Confirmatory Reference #" v-model="confirmatoryNum" class="form-control">          

        </div> <!-- end input-group -->

        <!-- REQUEST DETAILS SECTION -->
        <h5 class="text-info">Request Details</h5>
        <div class="form-group" v-if="hasResult">

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Requesting Facility:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{facility}}</label>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Requested By:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{pointperson}}</label>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Position:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{position}}</label>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Date of Request:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{requestDate}}</label>
            </div>

            <h5 class="text-info mt-4">Blood Sample Details</h5>


            <!-- BLOOD SAMPLE DETAILS -->
             <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        Specimen #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="specimen" class="form-control">          
            </div> <!-- end input-group -->

            <div class="row mt-3">
                <div class="col-sm-4" for="inputDefault">&nbsp;</div>
                <div class="custom-control custom-checkbox col-sm-8">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked="" v-model="disabled">
                    <label class="custom-control-label" for="customCheck1">In good condition</label>
                </div>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Blood Type:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{bloodtype}}</label>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="inputDefault"><strong>Reactive for:</strong></label>
                <label class="col-form-label col-sm-8" id="inputDefault">{{tti}}</label>
            </div>

            <div class="row mt-3">
                <label class="col-sm-4" for="exampleTextarea"><strong>Remarks:</strong></label>
                <textarea class="form-control col-sm-8" id="exampleTextarea" rows="3" v-model="remarks"></textarea>
            </div>

            <div class="row mt-5">
                <div class="col-md-6">
                    <button type="button" class="btn btn-danger btn-block pull-right" data-toggle="tooltip" 
                    data-placement="right" title="Reject the Blood sample" :disabled="disabled"><i class="fa fa-times"></i>&nbsp;REJECT</button>  
                </div>
                <div class="col-md-6">
                    <!-- ROUTER-LINK IS FOR TESTING PURPOSES ONLY !!!! USE BUTTON ON DEVELOPMENT -->
                    <router-link to="/registerloc" class="btn btn-success btn-block pull-left" data-toggle="tooltip" 
                    data-placement="left" title="Accept the Blood sample"><i class="fa fa-check"></i>&nbsp;ACCEPT</router-link>

                    <!-- <button type="button" class="btn btn-success btn-block pull-left" data-toggle="tooltip" 
                    data-placement="left" title="Accept the Blood sample" :disabled="!disabled"><i class="fa fa-check"></i>&nbsp;ACCEPT</button> -->
                </div>
            </div>
        </div><!-- form-group -->

        <div class="form-group text-center" v-if="!hasResult">
            No records to display
        </div>


        
    </div>
</template>

<script>
export default {
    data() {
        return{
            hasResult : '',
            disabled : false,
            // CTS2019-000001
            confirmatoryNum : '',
            // NVBSP20190002020
            donationID : '',
            specimen : '',
            remarks : 'this is a sample remark',
            facility : 'NVBSP-IMU',
            pointperson : 'Rubena R. Felix',
            position : 'Supreme Leader',
            requestDate : 'April 16, 2019 - 09:45:45AM',
            bloodtype : 'A POS',
            tti : 'HIV',
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
