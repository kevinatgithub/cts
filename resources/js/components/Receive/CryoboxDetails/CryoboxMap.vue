<template>
    <div v-if="cryobox">
        <b-row v-for="(row,i) in specimenSlots" :key="i" :class="small ? 'cryobox-row' : null">
            <b-col>
                <b-button v-for="(s,i2) in row" :key="i2" 
                    :variant="variant(i,i2)"
                    :class="!small ? (!isTaken({x:i,y:i2}) ? 'cryobox' : 'cryobox bg-dark text-light') : 'mini'"
                    @click="slotClicked({x:i,y:i2})"
                    :disabled="isTaken({x:i,y:i2})">
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
            cryobox : null
        }
    },
    mounted(){
        if(!this.cryoboxes || !this.box){
            return
        }
        let that = this
        let cryobox = _.find(this.cryoboxes,function(c){
            return c.cryobox_no.toUpperCase() == that.box.box_no.toUpperCase()
        })
        this.cryobox = cryobox
    },
    computed : {
        ...mapGetters(['cryoboxes']),
        specimenSlots(){
            let slots = []
            if(!this.cryobox){
                return slots
            }
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
        },
    },
    methods : {
        variant(i,i2){
            let {box} = this
            if(box.slot){
                return box.slot.x == i && box.slot.y == i2 ? 'primary' : 'outline-primary'
            }else{
                return 'outline-primary'
            }
        },
        slotClicked(slot){
            this.$emit('slotClicked',slot)
        },
        isTaken({x,y}){
            let {cryobox} = this
            if(cryobox){
                let {content} = cryobox
                if(!content){
                    return false
                }
                return _.find(content,{x, y}) != undefined
            }
            return false
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