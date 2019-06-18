<template>
    <div>
        <div v-if="donation.donor">
            <case-identification :donor="donation.donor" class="mb-3" />
        </div>
        <div v-if="!donation.donor" class="mb-3">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Donor Information not provided</b-card>
        </div>
        <div v-if="donation.facility">
            <blood-service-facility class="mb-3" />
        </div>
        <div v-if="!donation.facility" class="mb-3">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Facility Information not provided</b-card>
        </div>
    </div>
</template>

<script>
import CaseIdentification from './CaseIdentificationCard'
import BloodServiceFacility from './BloodServiceFacilityCard'
export default {
    props : ['donation'],
    components : {CaseIdentification, BloodServiceFacility}
}
</script>

