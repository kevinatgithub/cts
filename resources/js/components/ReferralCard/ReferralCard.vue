<template>
    <div role="tablist">
        
        <div v-if="referral.donation.donor">
            <case-identification :donor="referral.donation.donor" />
        </div>
        <div v-if="!referral.donation.donor">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Donor Information not provided</b-card>
        </div>
        
        <div v-if="referral.donation.facility">
            <blood-service-facility :facility="referral.donation.facility" />
        </div>
        <div v-if="!referral.donation.facility">
            <b-card text-variant="danger"><i class="fa fa-info-circle"></i> Facility Information not provided</b-card>
        </div>
        
        <div>
            <specimen-collection :referral="referral" />
        </div>

    </div>
</template>

<script>
import CaseIdentification from './CaseIdentificationCard'
import BloodServiceFacility from './BloodServiceFacilityCard'
import SpecimenCollection from './SpecimenCollectionCard'
export default {
    props : ['referral'],
    components : {CaseIdentification, BloodServiceFacility, SpecimenCollection}
}
</script>

