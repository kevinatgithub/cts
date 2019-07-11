<template>
    <div>
        <options-crud :storeData="records" :category="category" @hasChange="changed" />
    </div>
</template>
<script>
import OptionsCrud from './OptionsCrud'
export default {
    components : {OptionsCrud},
    props : ['category'],
    data(){
        return {
            records : []
        }
    },
    async mounted(){
        let request = await this.$store.dispatch('options_get',{category : this.category})
        this.records = request.data
    },
    methods : {
        async changed(){
            let request = await this.$store.dispatch('options_get',{category : this.category})
            this.records = request.data
            this.$emit('hasChange',true)
        }
    }
}
</script>
