<template>
    <div>
        <comp-url>Timeline</comp-url>
        <timeline :referral="referral" :expanded="expanded" />
    </div> <!-- main div -->
</template>

<script>
import Timeline from './Timeline/TimelineMinimalist'
export default {
   props : ['referral','expanded'],
   components: {Timeline}
}
</script>

<style>


</style>

