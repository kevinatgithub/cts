<template>
    <div>
        <div v-if="referral.donation.donor">
            <case-identification :donor="referral.donation.donor" class="mb-3" />
        </div>
        <div v-if="!referral.donation.donor" class="mb-3">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Donor Information not provided</b-card>
        </div>
        <div v-if="referral.donation.facility">
            <blood-service-facility class="mb-3" />
        </div>
        <div v-if="!referral.donation.facility" class="mb-3">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Facility Information not provided</b-card>
        </div>
    </div>
</template>

<script>
import CaseIdentification from './CaseIdentificationCard'
import BloodServiceFacility from './BloodServiceFacilityCard'
export default {
    props : ['referral'],
    components : {CaseIdentification, BloodServiceFacility}
}
</script>

