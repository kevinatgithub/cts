<template>
    <div>
        <!-- REQUEST DETAILS SECTIONS -->
        <h5 class="text-info">Request Details</h5>
        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-building"></i>&nbsp;Requesting Facility:
            </label>
            <b-input placeholder="" v-model="referral.donation.facility.facility_name" disabled></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-user"></i>&nbsp;Requested By:
            </label>
            <b-input placeholder="" v-model="referral.request_by.name" disabled></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-user"></i>&nbsp;Position:
            </label>
            <b-input placeholder="" v-model="referral.request_by.position" disabled></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-calendar"></i>&nbsp;Date of Request:
            </label>
            <b-input placeholder="" v-model="referral.created_dt" disabled></b-input>
        </b-input-group>
    </div>
</template>

<script>
export default {
    props : ['referral']
}
</script>