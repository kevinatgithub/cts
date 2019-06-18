<template>
    <div>
        <comp-url>Timeline</comp-url>
        <timeline :referral="referral" />
    </div> <!-- main div -->
</template>

<script>
import Timeline from './Timeline/TimelineMinimalist'
export default {
   props : ['referral'],
   components: {Timeline}
}
</script>

<style>


</style>

