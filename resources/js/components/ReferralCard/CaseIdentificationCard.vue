<template>
    <b-card header-text-variant="white" header-bg-variant="dark">
        <template slot="header">
            <i class="fa fa-user"></i> Case Identification
        </template>
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
    </b-card>
</template>
<script>
export default {
    props : ['donor'],
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
