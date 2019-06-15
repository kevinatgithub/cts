<template>
    <div>
        <comp-url>Request / RequestForm</comp-url>
        <b-input-group class="mb-3">
            <label for="" class="input-group-text" slot="prepend">
                 <i class="fa fa-search"></i>&nbsp;
                    Donation ID:
            </label>
            <b-input aria-label="REF-#" placeholder="Scan /Enter Donation ID" v-model="hasResult"></b-input>
        </b-input-group>

        <h5 class="text-info">Specimen Details</h5>

        <b-form-group class="mt-3" v-if="hasResult">
            <b-input-group class="mb-3">
                <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-tint"></i>&nbsp;
                    Blood Type:
                </label>
                <b-input aria-label="BloodType" placeholder="Scan /Enter Donation ID" v-model="bloodtype" disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    Reactive for:
                </label>
                <b-input aria-label='BloodType' placeholder='Scan /Enter Donation ID' v-model='tti' disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-calendar'></i>&nbsp;
                    Date Collected:
                </label>
                <b-input aria-label='' placeholder='' v-model='date' disabled></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    Specimen type:
                </label>
                <b-form-select :options="specimens"></b-form-select>
            </b-input-group>

            <h5 class="text-info mt-3">Other Details</h5>

            <b-form-group>
                <b-form-radio-group label="Courier Details" v-model="courier">
                    <b-form-radio value="Hand Carry">Hand Carry</b-form-radio>
                    <b-form-radio value="Courier">Courier</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <!-- IF HAND CARRY -->
            <b-input-group class="mb-3" v-if="courier == 'Hand Carry'">
                <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-user"></i>&nbsp;
                    Person in charge:
                </label>
                <b-input placeholder="First Name" v-model="fname"></b-input>
                <b-input placeholder="Middle Name" v-model="mname"></b-input>
                <b-input placeholder="Last Name" v-model="lname"></b-input>
            </b-input-group>
            <b-input-group class="mb-3" v-if="courier == 'Hand Carry'">
                <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-phone"></i>&nbsp;
                    Contact Number:
                </label>
                <b-input placeholder="Contact Number"></b-input>
            </b-input-group>

            <!-- IF COURIER -->
            <b-input-group class="mb-3" v-if="courier == 'Courier'">
                <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-truck"></i>&nbsp;
                    Select Courier:
                </label>
                <b-form-select v-model="courier_provider" :options="couriers"></b-form-select>
            </b-input-group>
            <b-input-group class="mb-3" v-if="courier == 'Courier'">
                <label class="input-group-text" for="inputGroupSelect01" slot="prepend">
                    <i class="fa fa-id-card"></i>&nbsp;
                    Reference Number:
                </label>
                <b-input placeholder="Referenence Number"></b-input>
            </b-input-group>

            <b-row>
                <b-col cols="8" class="mt-3">
                    <b-button block variant="success"><i class="fa fa-paper-plane"></i>&nbsp;SEND AND SHIP SPECIMEN</b-button>
                </b-col>
            </b-row>

        </b-form-group>

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
            courier : null,

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
                { value : 'SPL 1', text : 'SPL 1' },
                { value : 'SPL 2', text : 'SPL 2' },
            ],

            fname : '',
            mname : '',
            lname : '',

            couriers : [
                { value : 'FedEx', text : 'FedEx' },
                { value : 'LBC', text : 'LBC' },
                { value : 'Lalamove', text : 'Lalamove' },
                { value : 'GrabExpress', text : 'GrabExpress' },
            ],

        }
    }, // end data

    computed : {
        
        fullname: function(){
            return this.fname + ' ' + this.mname + ' ' + this.lname;
        },
    },

    methods : {
        
    }
}
</script>

<style>

</style>
