<template>
    <div>
        <comp-url>Stockyard / StockyardForm</comp-url>
        <b-form-group>
            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-search'></i>&nbsp;
                    Confirmatory Request #:
                </label>
                <b-input placeholder='Scan /Enter Confirmatory Reference #' v-model='hasResult'></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-barcode'></i>&nbsp;
                    Donation ID:
                </label>
                <b-input placeholder='Donation ID' v-model='donationID' disabled></b-input>
            </b-input-group>

            <h5 class="text-info mt-4">Cryobox Details</h5>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-cube'></i>&nbsp;
                    Cryobox #:
                </label>
                <b-input placeholder='Scan /Enter Cryobox #' v-model='cryoboxnum'></b-input>
                <b-button slot="append" variant="primary">+</b-button>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-cubes'></i>&nbsp;
                    Slot #:
                </label>
                <b-input placeholder='Select Cryobox Slot #' v-model='cryoslot'></b-input>
            </b-input-group>

            <h5 class="text-info mt-5">Ref Details</h5>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-list'></i>&nbsp;
                    Ref #:
                </label>
                <b-input placeholder='Scan /Enter Ref #' v-model='refnum'></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-clone'></i>&nbsp;
                    Compartment #:
                </label>
                <b-input placeholder='Compartment #' v-model='refcomp'></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-bars'></i>&nbsp;
                    Row #:
                </label>
                <b-input placeholder='Row #' v-model='refrow'></b-input>
            </b-input-group>

            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-columns'></i>&nbsp;
                    Column #:
                </label>
                <b-input placeholder='Column #' v-model='refcol'></b-input>
            </b-input-group>

            <b-button variant="success" block title="Register Blood specimen location"><i class="fa fa-save"></i>&nbsp;REGISTER SPECIMEN LOCATION</b-button>
        </b-form-group>
    </div><!-- main div -->
</template>

<script>
export default {
    data(){
        return{
            hasResult : '',
            confirmatoryNum : 'CTS019-000100',
            donationID : 'NVBSP20190001000',
            displayNone : '',
            cryoboxnum : '',
            cryoslot : '',
            refnum : '',
            refcomp : '',
            refrow : '',
            refcol : ''

        }
    },
}
</script>

<style>

</style>
