<template>
    <b-card no-body header-bg-variant="light">
        <template slot="header">
            <div v-b-toggle.referral-card-1 role="tab" style="cursor:pointer;">
                <i class="fa fa-user"></i> Case Identification
            </div>
        </template>
        <b-collapse id="referral-card-1" visible accordion="referral-card" role="tabpanel">
            <b-card-body>
                <b-row>
                    <b-col cols="4" class="text-right">Initials &nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i></b-col>
                    <b-col>{{donor.initials}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols="4" class="text-right">Date of Birth &nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i></b-col>
                    <b-col>{{donor.dob}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Age &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{age}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Nationality &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{donor.nationality}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Civil Status &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{donor.civil_status}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Occupation &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{donor.occupation}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Home Address &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{donor.home_address}}</b-col>
                </b-row>
                <b-row>
                    <b-col class="mt-3">
                        <b-button variant="light" class="ml-5" size="sm" v-b-modal.bsf-test-details><i class="fa fa-search"></i> BST Test Details</b-button>
                        <b-modal id="bsf-test-details" size="xl" header-bg-variant="dark" header-text-variant="white" title="BSF Test Details" hide-footer>
                            <bsf-test-details-card :referral="referral" />
                        </b-modal>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>
<script>
import BsfTestDetailsCard from './CaseIdentificationCard/BsfTestDetailsCard'
export default {
    components : {BsfTestDetailsCard},
    props : ['donor','referral'],
    computed : {
        age(){
            return this.getAge(this.donor.dob)
        },
        
    },
    methods : {
        getAge(DOB) {
            var today = new Date();
            var birthDate = new Date(DOB);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }

            return age;
        }
    }
}
</script>
