<template>
    <div>
        <comp-url>Report</comp-url>
        <h3 class="text-primary">Generate Report</h3>
        <hr>
        <b-breadcrumb :items="[
            {text: 'Generate Report', href: '#'},
            {text: 'View report list', active: true},
        ]"></b-breadcrumb>

        <b-row class="mt-5">
            <b-col>
                <report-form></report-form>
            </b-col>
            <b-col>
                <div class="mt-5 d-block d-sm-block d-md-none d-lg-none d-xl-none"></div>
                <timeline></timeline>
            </b-col>
        </b-row>

    </div>
</template>

<script>

import Timeline from './Timeline'
import ReportForm from './Report/ReportForm'
export default {
   components: {Timeline,ReportForm}
}
</script>

<style>

</style>
