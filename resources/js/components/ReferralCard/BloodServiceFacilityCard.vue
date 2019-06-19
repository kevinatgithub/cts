<template>
    <b-card no-body header-bg-variant="light">
        <template slot="header">
            <div v-b-toggle.referral-card-2 style="cursor:pointer;">
                <i class="fa fa-building"></i> Referring Hospital / Blood Bank Information
            </div>
        </template>
        <b-collapse id="referral-card-2" accordion="referral-card">
            <b-card-body>
                <b-row>
                    <b-col cols='4' class='text-right'>Hospital &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{facility.facility_name}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Hospital Address &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{facility.address}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Blood Bank Code &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{facility.facility_cd}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Region &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{facility.region}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols='4' class='text-right'>Pathologist &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{facility.pathologist}}</b-col>
                </b-row>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
export default {
    props : ['facility'],
}
</script>
