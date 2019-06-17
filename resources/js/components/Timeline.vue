<template>
    <div>
        <comp-url>Timeline</comp-url>
        <div class="container">
            <div class="row">
                <timeline-slot :referral="referral"></timeline-slot>
            </div> <!-- row-->
        </div> <!-- container -->
    </div> <!-- main div -->
</template>

<script>
import TimelineSlot from './Timeline/TimelineSlot'
export default {
   props : ['referral'],
   components: {TimelineSlot}
}
</script>

<style>


</style>

