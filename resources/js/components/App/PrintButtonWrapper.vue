<template>
    <div>
        <i v-show="!printMode" @click="performClick" class="text-info fa fa-print" style="cursor:pointer;font-size:18px;"></i>
        <print-button v-show="printMode" :elementID="elementID" @callback="callBack"></print-button>
    </div>
</template>
<script>
import PrintButton from './PrintButton'
export default {
    components : {PrintButton},
    props : ['printMode','elementID'],
    methods : {
        callBack(){
            this.$emit('callback')
        },
        performClick(){
            this.$emit('whenClicked')
        }
    }
}
</script>
