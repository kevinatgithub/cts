<template>
    <div>
        <div class="container">
            <div class="row">
                <timeline-slot></timeline-slot>
            </div> <!-- row-->
        </div> <!-- container -->
    </div> <!-- main div -->
</template>

<script>
import TimelineSlot from './Timeline/TimelineSlot'
export default {
   components: {TimelineSlot}
}
</script>

<style>


</style>

