<template>
    <b-card>
        <template slot="header">
            <i class="fa fa-cube"></i> Cryobox Details
            <b-button class="pull-right" variant="dark" size="sm" @click="editPressed"><i class="fa fa-pencil"></i></b-button>
        </template>
        <b-row>
            <b-col cols="4" sm="12" md="12" lg="4" xl="4" style="min-width:150px;" class="text-center">
                <cryobox-map :box="cryobox" small="true"></cryobox-map>
            </b-col>
            <b-col class="mt-3" sm="12" md="12" lg="8" xl="8">
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Cryobox # &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{cryobox.box_no}}</b-col>
                </b-row>
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Refrigerator &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{ref}}</b-col>
                </b-row>
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Compartment &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{comp}}</b-col>
                </b-row>
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Row &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{srow}}</b-col>
                </b-row>
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Stored By &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{cryobox.stored_by.name}}</b-col>
                </b-row>
                <b-row class="detail">
                    <b-col cols='5' class='text-right'>Stored Date &nbsp;&nbsp;&nbsp;<i class='fa fa-caret-right'></i></b-col>
                    <b-col>{{cryobox.stored_dt}}</b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
        </b-row>
    </b-card>
</template>
<script>
import CryoboxMap from './CryoboxMap'
import {mapGetters} from 'vuex'
export default {
    props : ['cryobox'],
    components : {CryoboxMap},
    methods : {
        editPressed(){
            this.$emit('editPressed',true)
        }
    },
    computed : {
        ...mapGetters(['refrigerators']),
        ref(){
            let r = _.find(this.refrigerators,{id:this.cryobox.refrigerator})
            if(!r){
                return ""
            }
            return r.name
        },
        comp(){
            let r = _.find(this.refrigerators,{id:this.cryobox.refrigerator})
            if(!r){
                return ""
            }
            let c = _.find(r.compartments,{id : this.cryobox.compartment})
            if(!c){
                return ""
            }
            return c.compartment_name
        },
        srow(){
            let r = _.find(this.refrigerators,{id:this.cryobox.refrigerator})
            if(!r){
                return ""
            }
            let c = _.find(r.compartments,{id : this.cryobox.compartment})
            if(!c){
                return ""
            }
            let {row} = this.cryobox
            let section = c.sections[row[0]]
            let srow = _.find(section.rows,{id:row[1]})
            if(!srow){
                return ""
            }
            return (row[0] == 0 ? 'Front':'Back') +" " +srow.row_name
        }
    }
}
</script>
<style scoped>
.detail{
    /* font-size:12px; */
}
</style>
