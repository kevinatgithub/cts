<template>
    <div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i class="fa fa-search"></i>&nbsp;
                        Confirmatory Request #:
                    </label>
                </div>
                <input type="text" aria-label="" placeholder="Scan /Enter Confirmatory Reference #" v-model="hasResult" class="form-control">      
            </div> <!-- end input-group -->

            <h5 class="text-info mt-5">Report Summary</h5>

            <div v-if="hasResult" class="mb-5">
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
                    <hr>
                        <p class="small text-center">
                        Research Institute for Tropical Medicine<br>
                        9002 Research Drive, Filinvest Corporate City, Alabang Muntinlupa City, Metro Manila<br>
                        Philippines, 1781<br>
                        Telephone: (+632)807-2631 | (+632)807-2632 | (+632)807-2637<br>
                        Email: info@ritm.gov.p
                        </p>
                     </div>
                </div>
            </div>

            <div v-if="!hasResult" class="text-center mb-5">
                No records to display
            </div>
            
        </div> <!-- end form-group -->  

        <div class="mb-5">&nbsp;</div> 

        <div class="row mt-5">
            <div class="col-md-8">
                <button type="button" class="btn btn-success btn-block" data-toggle="tooltip" 
                data-placement="right" :title="btnTitle"><i class="fa fa-print"></i>&nbsp;SUBMIT RESULT TO BSF</button>  
            </div>
        </div>                

    </div><!-- main -->
</template>

<script>
export default {
    data(){
        return {
            hasResult : '',
            finalResult : 'POSITIVE',
            // CTS2019-000001
            confirmatoryNum : 'CTS2019-000001', 
            // NVBSP20190001000
            donationID : 'NVBSP20190001000',
            finalMsg : '* The result shown above is final result, it is done with multiple test and cannot be changed in any cause.',
            btnTitle : 'Click to submit generated report to BSF',
        }
    }
}
</script>

<style>

</style>
