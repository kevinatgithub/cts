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
        <div class="form-group mt-3" v-if="hasResult">

             <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-building"></i>&nbsp;
                        Requesting Facility:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="facility" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-user"></i>&nbsp;
                        Requested By:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="pointperson" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-user"></i>&nbsp;
                        Position:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="position" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-calendar"></i>&nbsp;
                        Date of Request:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="requestDate" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <!-- BLOOD SAMPLE DETAILS -->
            <h5 class="text-info mt-4">Blood Sample Details</h5>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-tint"></i>&nbsp;
                        Specimen #:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="specimen" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-tint"></i>&nbsp;
                        Blood Type:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="bloodtype" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-tint"></i>&nbsp;
                        Reactive for:
                    </label>
                </div>
                <input type="text" aria-label="REF-#" placeholder="Scan /Enter Confirmatory Reference #" v-model="tti" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mt-3">
                <div class="col-sm-2" for="inputDefault">&nbsp;</div>
                <div class="custom-control custom-checkbox col-sm-10">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked="" v-model="disabled" required>
                    <label class="custom-control-label" for="customCheck1">In good condition</label>
                </div>
            </div>

            <div class="input-group mt-3">
                <label class="col-sm-2" for="exampleTextarea"><strong>Remarks:</strong></label>
                <textarea class="form-control col-sm-10" id="exampleTextarea" rows="6" placeholder="Type-in some remarks" v-model="remarks" required></textarea>
            </div>

            <div class="row mt-5">
                <div class="col-md-6">
                    <button type="button" class="btn btn-danger btn-block pull-right" data-toggle="modal" data-target="#exampleModalCenter"
                    data-placement="right" title="Reject the Blood sample" :disabled="disabled"><i class="fa fa-trash"></i>&nbsp;REJECT</button>  
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

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-primary">
                    <div class="modal-header bg-primary">
                        <h3 class="modal-title text-light lead" id="exampleModalCenterTitle">
                            <i class="fa fa-trash"></i>&nbsp;Reason for Rejection
                        </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                                
                    <div class="modal-body">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-pencil"></i>&nbsp;
                                </span>
                            </div>
                            <textarea class="form-control" aria-label="With textarea" rows="8" placeholder="Type-in the reason for the rejection of the specimen"></textarea>
                        </div> <!-- end input-group -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">SUBMIT</button>
                    </div>
                </div>
            </div>
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
            specimen : 'SPL-2',
            remarks : '',
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
