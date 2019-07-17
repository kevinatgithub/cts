<template>
    <div>
        <b-input-group class='mb-1' size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:150px;">
                <i class='fa fa-hashtag'></i>&nbsp;
                Lot Number:
            </label>
            <b-input placeholder='Lot Number' v-model='lot.lot_no'></b-input>
        </b-input-group>

        <b-input-group class='mb-1' size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:150px;">
                <i class='fa fa-tint'></i>&nbsp;
                Optical Density:
            </label>
            <b-input placeholder='Optical Density' v-model='lot.optical_density'></b-input>
        </b-input-group>

        <b-input-group class='mb-1' size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:150px;">
                <i class='fa fa-bar-chart'></i>&nbsp;
                Cut-off Value:
            </label>
            <b-input placeholder='Cut-off Value' v-model='lot.cutoff_value'></b-input>
        </b-input-group>

        <b-input-group class='mb-1' size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:150px;">
                <i class='fa fa-file-text-o'></i>&nbsp;
                Interpretation:
            </label>
            <b-form-select v-model="lot.interpretation" :options="interpretation_options"></b-form-select>
        </b-input-group>

        <b-input-group class='mb-3' size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:150px;">
                <i class='fa fa-calendar'></i>&nbsp;
                Date Tested:
            </label>
            <b-input type="date" placeholder='Date Tested' v-model='lot.date_tested'></b-input>
        </b-input-group>
    </div>
</template>
<script>
export default {
    props :['lot'],
    data(){
        return {
            interpretation_options : ['REACTIVE','NON-REACTIVE','EQUIVOCAL','GRAYZONE'],
        }
    }
}
</script>

