<template>
    <div>
        <i class="fa fa-print" @click="print"></i>
    </div>
</template>
<script>
export default {
    props : ['elementID'],
    methods : {
        print(){
            this.$htmlToPaper(this.elementID, () => {
                this.$emit('callback')
            });
        }
    }
}
</script>
<style scoped>
i{
    font-size: 18px;
    cursor: pointer;
}
</style>

