<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                    <i class="fa fa-search"></i>&nbsp;
                    Donation ID:
                </label>
            </div>
            <input type="text" aria-label="REF-#" placeholder="Scan /Enter Donation ID" v-model="hasResult" class="form-control">
        </div> <!-- end input-group -->

        <h5 class="text-info">Specimen Details</h5>
        <div class="form-group mt-3" v-if="hasResult">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-tint"></i>&nbsp;
                        Blood Type:
                    </label>
                </div>
                <input type="text" aria-label="BloodType" placeholder="Scan /Enter Donation ID" v-model="bloodtype" class="form-control" disabled>        
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-tint"></i>&nbsp;
                        Reactive for:
                    </label>
                </div>
                <input type="text" aria-label="BloodType" placeholder="Scan /Enter Donation ID" v-model="tti" class="form-control" disabled>     
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-calendar"></i>&nbsp;
                        Date Collected:
                    </label>
                </div>
                <input type="text" aria-label="BloodType" placeholder="Scan /Enter Donation ID" v-model="date" class="form-control" disabled>     
            </div> <!-- end input-group -->

            <div class="input-group mb-3">
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

            <h5 class="text-info mt-3">Other Details</h5>
            <div class="form-group">
                <div class="custom-control custom-radio">
                    <div class="col-6 pull-left">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" @click="showInCharge()">
                        <label class="custom-control-label" for="customRadio1">Hand Carry</label>
                    </div>
                    <div class="col-6 pull-right">
                         <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" @click="showCourier()">
                        <label class="custom-control-label" for="customRadio2">Courier</label>
                    </div>
               </div>
            </div>


            <!-- IF HAND CARRY -->
            <div class="input-group mb-3" v-if="inCharge">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-user"></i>&nbsp;
                        Person in charge:
                    </label>
                </div>
                <input type="text" aria-label="First Name" placeholder="First name" v-model="fname"  class="form-control">
                <input type="text" aria-label="Middle" placeholder="Middle" v-model="mname" class="form-control">
                <input type="text" aria-label="Last Name" placeholder="Last name" v-model="lname"  class="form-control">
            </div> <!-- end input-group -->

            <!-- IF COURIER -->
            <div class="input-group mb-3" v-if="inCourier">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-truck"></i>&nbsp;
                        Select Courier:
                    </label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected></option>
                    <option v-for="(courier, i) in couriers" :key="i">{{ courier.val }}</option>
                </select>
            </div> <!-- end input-group -->
            
            
            <div class="row col-8 mt-5">
                <button type="button" class="btn btn-success btn-block" data-toggle="tooltip" 
                    data-placement="left" :title="btnTitle"><i class="fa fa-paper-plane"></i>&nbsp;SEND AND SHIP SPECIMEN</button>
            </div>
        </div><!-- end form-group -->

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
            inCharge : false,
            inCourier : false,

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

            fname : '',
            mname : '',
            lname : '',

            couriers : [
                { val : 'FedEx' },
                { val : 'LBC' },
                { val : 'Lalamove' },
                { val : 'GrabExpress' },
            ],

        }
    }, // end data

    computed : {
        
        fullname: function(){
            return this.fname + ' ' + this.mname + ' ' + this.lname;
        },
    },

    methods : {
        showInCharge(){
            this.inCharge = true;
            this.inCourier = false;
        },
        showCourier(){
            this.inCourier = true;
            this.inCharge = false;
        },
    }
}
</script>

<style>

</style>
