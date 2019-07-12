<template>
    <div>
        <options-crud :category="category" :storeData="records" @hasChange="changed" />
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
    mounted(){
        this.reloadOptions()
    },
    watch : {
        category(){
            this.reloadOptions()
        }
    },
    methods : {
        async reloadOptions(){
            let {category} = this
            let response = await this.$store.dispatch('options_get',{category})
            this.records = response.data
            this.$emit('hasChange',true)
        },
        changed(){
            this.reloadOptions()
        }
    }
}
</script>
