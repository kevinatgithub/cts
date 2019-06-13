<template>
    <div class="content">
        <comp-url>Report / PreviewResult</comp-url>
        <div class="title text-center mb-3"><h3>REPORT SUMMARY</h3></div>
        <div class="text-center mb-3">
            <img src="img/doh_logo.png" height="10%" width="15%" alt="">
            <img src="img/ritm_logo.png" height="10%" width="18%" alt="">
            <img src="img/nvbsp_logo.png" height="10%" width="20%" alt="">
        </div>
        <hr>
        <div class="mb-5">Fri, May 03, 2019 06:45:32PM</div>
        
        <div>
            <div>Confirmatory Reference #: {{csnum}}</div>
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
</template>

<script>
export default {
    props : [
        'csnum', 'donationID', 'finalMsg', 'finalResult'
    ]
}
</script>