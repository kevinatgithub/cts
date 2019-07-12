<template>
    <div>
        <b-col sm="12">
            <b-input-group class='mb-3' size="sm">
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-book'></i>&nbsp;
                    New Category:
                </label>
                <b-input placeholder='Category Name' v-model="category" class="text-uppercase" autocomplete="off" @keypress.enter="addCategory"></b-input>
                <b-button slot="append" variant="success" @click="addCategory"><i class="fa fa-check"></i></b-button>
                <b-button slot="append" variant="dark" @click="category=null"><i class="fa fa-remove"></i></b-button>
            </b-input-group>
        </b-col>
        <b-tabs card small vertical pills>
            <b-tab v-for="(c,i) in categories" :key="i" :title="c">
                <options-manager :category="c" @hasChange="$emit('hasChange',true)" />
            </b-tab>
        </b-tabs>
        
    </div>
</template>
<script>
import OptionsManager from './OptionsRegistry/OptionsManager'
export default {
    components : {OptionsManager},
    data(){
        return {
            category : null,
            categories : []
        }
    },
    async mounted(){
        let response = await this.$store.dispatch('options_get_categories')
        this.categories = response.data
    },
    methods : {
        addCategory(){
            if(!this.category){
                return
            }
            this.categories.push(this.category.toUpperCase())
            this.category = null
        }
    }
}
</script>
