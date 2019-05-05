<template>
    <div>
        <h3 class="text-primary">Generate Report</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Generate Report</li>
            <li class="breadcrumb-item"><router-link to="/reportlist">View report list</router-link></li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-6">
                     <report-form></report-form>
                </div> <!-- end col-6 -->

                <div class="col-6">
                    <timeline></timeline>
                </div><!-- end col-6 -->
            </div> <!-- end row -->
        </div> <!-- end content -->
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
