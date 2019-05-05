<template>
    <div>
         <h3 class="text-primary">For Confirmatory Test List</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/request">Confirmatory Request</router-link></li>
            <li class="breadcrumb-item active">Check For Confirmatory list</li>
        </ol>


        <div class="content mt-5">
            <div class="row">
                <div class="col-12">

                    <div class="form-group">
                        <div class="row" v-for="(result, i) in donationIDs" :key="i">
                            <div class="input-group mb-3 col-12">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">
                                        <i class="fa fa-barcode"></i>&nbsp;
                                    </label>
                                </div>
                                <input type="text" aria-label="Donation ID" placeholder="Donation ID" v-model="result.donationID" class="form-control" disabled>
                                <input type="text" aria-label="Date Requested" placeholder="Date Requested" v-model="result.dateRequested" class="form-control" disabled>
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">
                                        <b>With Result:</b>
                                    </label>
                                </div>
                                <input type="text" aria-label="With Result" placeholder="With Result" v-model="result.status" class="form-control" disabled>
                                
                                <div class="col-2">
                                    <button type="button" class="btn btn-info btn-sm text-center" @click="showTimeline()" :title="btnTitle">
                                        <i class="fa fa-eye"></i>&nbsp;
                                    </button>
                                </div>          
                            </div> <!-- end input-group -->
                        </div><!-- end row -->
                    </div><!-- end form-group -->
                </div><!-- end div col-6 -->

                <!-- <div class="col-6">
                    <timeline></timeline>
                </div>end div col-6 -->
            </div>
        </div>

        
    </div><!-- main div -->
</template>

<script>
// import Timeline from './components/Timeline'
export default {
    // components : {Timeline},
    data(){
        return{
            btnTitle : 'Click to show timeline',
            btnTitle2 : 'Click to cancel this',

            donationIDs : [
                { donationID : 'NVBSP20190001000', dateRequested : 'Mon, April 22, 2019 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001024', dateRequested : 'Tue, April 23, 2019 09:45:45AM', status : 'no' },
                { donationID : 'NVBSP20190001001', dateRequested : 'Thu, April 25, 2019 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001015', dateRequested : 'Fri, April 26, 2019 09:45:45AM', status : 'no' },
                { donationID : 'NVBSP20190001037', dateRequested : 'Wed, December 22, 2018 09:45:45AM', status : 'no' },
                { donationID : 'NVBSP20190001002', dateRequested : 'Sat, November 18, 2018 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001009', dateRequested : 'Sun, October 15, 2018 09:45:45AM', status : 'yes' },
            ],
            
        }
    }
}
</script>

<style>

</style>
