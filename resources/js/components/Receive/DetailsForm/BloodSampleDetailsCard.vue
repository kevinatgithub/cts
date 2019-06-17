<template>
    <div>
        <!-- BLOOD SAMPLE DETAILS -->
        <h5 class="text-info mt-4">Blood Sample Details</h5>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-tint"></i>&nbsp;Specimen #:
            </label>
            <b-input placeholder="" v-model="referral.specimen.name" disabled></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-tint"></i>&nbsp;Blood Type:
            </label>
            <b-input placeholder="" v-model="referral.donation.blood_type" disabled></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label for="" class="input-group-text" slot="prepend">
                <i class="fa fa-tint"></i>&nbsp;Reactive For:
            </label>
            <b-input placeholder="" v-model="reactive_for" disabled></b-input>
        </b-input-group>
    </div>
</template>

<script>
export default {
    props : ['referral'],
    computed : {
        reactive_for(){
            if(this.referral){
                return this.referral.donation.reactiveResults.join()
            }else{
                return null
            }
        },
    }
}
</script>