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
                <div class="input-group mb-3 col-8">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">
                            <i class="fa fa-search"></i>&nbsp;
                            Donation ID:
                        </label>
                    </div>
                    <input type="text" aria-label="REF-#" placeholder="Scan /Enter Donation ID" v-model="hasResult" class="form-control">
                </div> <!-- end input-group -->

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
                                <input type="text" aria-label="With Result" placeholder="No results yet" v-model="result.status" class="form-control" disabled>
                                
                                <div class="col-2">
                                    <button type="button" class="btn btn-info btn-sm text-center" v-if="result.status"
                                     data-toggle="modal" data-target="#exampleModalCenter" :title="btnTitle">
                                        <i class="fa fa-eye"></i>&nbsp;
                                    </button>
                                </div>          
                            </div> <!-- end input-group -->
                        </div><!-- end row -->
                    </div><!-- end form-group -->
                </div><!-- end div col-12 -->

            </div>
        </div> <!-- end content mt-5 -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-info">
                    <div class="modal-header bg-info">
                        <h3 class="modal-title text-light lead" id="exampleModalCenterTitle">
                            <i class="fa fa-info"></i>&nbsp;This generated report will not be viewable after closing the dialog.
                        </h3>
                    </div>
                                
                    <div class="modal-body">
                        <div class="input-group">
                            <div class="content">
                                <div class="title text-center mb-3"><h3>REPORT SUMMARY</h3></div>
                                <div class="text-center mb-3">
                                    <img src="img/doh_logo.png" height="10%" width="15%" alt="">
                                    <img src="img/ritm_logo.png" height="10%" width="18%" alt="">
                                    <img src="img/nvbsp_logo.png" height="10%" width="20%" alt="">
                                </div>
                                <hr>
                                <div class="mb-5">Fri, May 03, 2019 06:45:32PM</div>
                                
                                <div>
                                    <div>Confirmatory Reference #: {{confirmatoryNum}}</div>
                                </div>

                                <div>
                                    <div>Donation ID: {{donationID}}</div>
                                </div>

                                <div>
                                    <div>Confirmatory Test Result: <strong class="text-primary">{{finalResult}}</strong></div>
                                    <div class="mt-5 text-center">{{finalMsg}}</div>
                                </div>

                                <div class="mt-5">
                                    <p class="small text-center">
                                    Research Institute for Tropical Medicine<br>
                                    9002 Research Drive, Filinvest Corporate City, Alabang Muntinlupa City, Metro Manila<br>
                                    Philippines, 1781<br>
                                    Telephone: (+632)807-2631 | (+632)807-2632 | (+632)807-2637<br>
                                    Email: info@ritm.gov.p
                                    </p>
                                </div>
                            </div> <!-- end content -->
                        </div> <!-- end input-group -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div><!-- main div -->
</template>

<script>
export default {
    data(){
        return{
            btnTitle : 'Click to show timeline',
            btnTitle2 : 'Click to cancel this',

            // sample results variables
            finalResult : 'POSITIVE',
            confirmatoryNum : 'CTS2019-000001', 
            donationID : 'NVBSP20190001000',
            finalMsg : '* The result shown above is final result, it is done with multiple test and cannot be changed in any cause.',
            btnTitle : 'Click to view a one (1) time generated report sent by the ritm',

            donationIDs : [
                { donationID : 'NVBSP20190001000', dateRequested : 'Mon, April 22, 2019 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001024', dateRequested : 'Tue, April 23, 2019 09:45:45AM', status : '' },
                { donationID : 'NVBSP20190001001', dateRequested : 'Thu, April 25, 2019 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001015', dateRequested : 'Fri, April 26, 2019 09:45:45AM', status : '' },
                { donationID : 'NVBSP20190001037', dateRequested : 'Wed, December 22, 2018 09:45:45AM', status : '' },
                { donationID : 'NVBSP20190001002', dateRequested : 'Sat, November 18, 2018 09:45:45AM', status : 'yes' },
                { donationID : 'NVBSP20190001009', dateRequested : 'Sun, October 15, 2018 09:45:45AM', status : 'yes' },
            ],
            
        }
    }
}
</script>

<style>

</style>
