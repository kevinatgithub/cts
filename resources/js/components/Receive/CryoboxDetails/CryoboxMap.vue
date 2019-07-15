<template>
    <div>
        <b-row v-for="(row,i) in specimenSlots" :key="i" :class="small ? 'cryobox-row' : null">
            <b-col v-if="box.slot" >
                <b-button v-for="(s,i2) in row" :key="i2" 
                    :variant="box.slot.x == i && box.slot.y == i2 ? highlight_variant : 'outline-primary'"
                    :class="!small ? 'cryobox' : 'mini'"
                    @click="slotClicked({x:i,y:i2})">
                    <span v-if="!small">
                        {{s.text}}
                    </span>
                </b-button>
            </b-col>
            <b-col v-if="!box.slot">
                <b-button v-for="(s,i2) in row" :key="i2" 
                    variant="outline-primary"
                    :class="!small ? 'cryobox' : 'mini'"
                    @click="slotClicked({x:i,y:i2})">
                    <span v-if="!small">
                        {{s.text}}
                    </span>
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props : ['box','small'],
    data(){
        return {
            highlight_variant : 'primary'//!this.small ? 'primary' : 'danger'
        }
    },
    computed : {
        ...mapGetters(['cryobox']),
        specimenSlots(){
            let slots = []
            let {cryobox : {rows,columns}} = this
            for(let i = 0; i < rows; i++){
                let row = []
                for(let i2 = 0; i2 < rows; i2++){
                    row.push({
                        row : i,
                        column : i2,
                        text : (i*10) + i2 +1
                    })
                }
                slots.push(row)
            }
            return slots
        }
    },
    methods : {
        slotClicked(slot){
            this.$emit('slotClicked',slot)
        }
    }
}
</script>

<style scoped>
.cryobox{
    margin : 3px;
    padding: 0px;
    font-size: 12px;
    min-width: 30px;
    min-height: 28px;
    border-radius: 2em;
}
.mini{
    margin : 1px;
    padding: 0px;
    font-size: 6px;
    min-width: 10px;
    min-height: 10px;
    border-radius: 2em;
}
.cryobox-row{
    margin-top:0px !important;
    margin-bottom:0px !important;
    height : 10px;
}
</style>