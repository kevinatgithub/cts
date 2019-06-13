<template>
    <div>
        <comp-url>Receive / DetailsForm</comp-url>
        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-search"></i>&nbsp;Donation ID:
            </label>
            <b-input placeholder="Scan /Enter Donation ID" v-model="hasResult"></b-input>
        </b-input-group>

        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-pencil"></i>&nbsp;Confirmatory Request #:
            </label>
            <b-input placeholder="Scan /Enter Confirmatory Request #" v-model="confirmatoryNum"></b-input>
        </b-input-group>

        <!-- REQUEST DETAILS SECTIONS -->
        <h5 class="text-info">Request Details</h5>
        <b-form-group class="mt-3" v-if="hasResult">
            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-building"></i>&nbsp;Requesting Facility:
                </label>
                <b-input placeholder="" v-model="facility" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-user"></i>&nbsp;Requested By:
                </label>
                <b-input placeholder="" v-model="pointperson" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-user"></i>&nbsp;Position:
                </label>
                <b-input placeholder="" v-model="position" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-calendar"></i>&nbsp;Date of Request:
                </label>
                <b-input placeholder="" v-model="requestDate" disabled></b-input>
            </b-input-group>

            <!-- BLOOD SAMPLE DETAILS -->
            <h5 class="text-info mt-4">Blood Sample Details</h5>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Specimen #:
                </label>
                <b-input placeholder="" v-model="specimen" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Blood Type:
                </label>
                <b-input placeholder="" v-model="bloodtype" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;Reactive For:
                </label>
                <b-input placeholder="" v-model="tti" disabled></b-input>
            </b-input-group>

            <b-input-group class="mb-3">
                <b-col sm="2">
                    &nbsp;
                </b-col>
                <b-form-checkbox v-model="accept" :value="true" :unchecked-value="false">
                    In good condition
                </b-form-checkbox>
            </b-input-group>

            <b-input-group class="mt-3">
                <label for="" class="col-sm-2"><strong>Remarks:</strong></label>
                <b-form-textarea placeholder="Type-in some remarks" rows="6" v-model="remarks" required></b-form-textarea>
            </b-input-group>

            <b-row class="mt-5">
                <b-col>
                    <b-button variant="danger" block :disabled="accept" v-b-modal.rejectModal>
                        <i class="fa fa-trash"></i>&nbsp;REJECT
                    </b-button>
                </b-col>
                <b-col>
                    <b-button variant="success" block title="Accept the Blood sample" :disabled="!accept">
                        <i class="fa fa-check"></i>&nbsp;ACCEPT
                    </b-button>
                </b-col>
            </b-row>
        </b-form-group>

        <div class="form-group text-center" v-if="!hasResult">
            No records to display
        </div>

        <b-modal id="rejectModal" header-bg-variant="primary">
            <template slot="modal-title">
                <h3 class="modal-title text-light lead" id="exampleModalCenterTitle">
                    <i class="fa fa-trash"></i>&nbsp;Reason for Rejection
                </h3>
            </template>

            <b-input-group class="mb-3">
                <label for="" class="input-group-text" slot="prepend">
                    <i class="fa fa-pencil"></i>&nbsp;
                </label>
                <b-form-textarea placeholder="Type-in the reason for the rejection of the specimen" rows="8"></b-form-textarea>
            </b-input-group>

            <template slot="modal-footer">
                <b-button variant="primary">SUBMIT</b-button>
            </template>
        </b-modal>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            hasResult : '',
            accept : false,
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
