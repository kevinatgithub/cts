<template>
    <b-card>
        <b-card-text>BIORAD GEENIUS</b-card-text>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                INTERPRETATION:
            </label>
            <b-input></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                DATE TESTED:
            </label>
            <b-input type="date"></b-input>
        </b-input-group>

        <b-input-group class="mb-3" size="sm">
            <label class='input-group-text' slot='prepend' style="min-width:170px;">
                REMARKS:
            </label>
            <b-form-select :options="geenius_options"></b-form-select>
        </b-input-group>
    </b-card>
</template>
<script>
export default {
    data(){
        return {
            geenius_options : [
                'POSITIVE (HIV-1)',
                'NEGATIVE'
            ]
        }
    }
}
</script>

