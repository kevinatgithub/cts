<template>
    <div>
        <comp-url>Administration / Referemces / Refrigerator</comp-url>
        <b-row>


            <!-- Refrigerator -->
            <b-col v-show="!refrigerator">
                <refrigerator-list :items="items" @refSelected="selectRef" ></refrigerator-list>
            </b-col>

            <!-- Compartments -->
            <b-col v-if="refrigerator && !compartment">
                <compartment-list :refrigerator="refrigerator" @compartmentSelected="selectCompartment" @backPressed="refrigerator=null"></compartment-list>
                <!-- <b-card>
                    <ref3d :compartments="refrigerator.compartments" />
                </b-card> -->
            </b-col>

            <!-- Rows -->
            <b-col v-if="compartment && !currentRow">
                <row-list :refrigerator="refrigerator" :compartment="compartment" @rowSelected="selectRow" @sectionSelected="selectSection" @backPressed="compartment=null" ></row-list>
            </b-col>

            <!-- Cryobox Slots -->
            <b-col v-if="currentRow">
                <cryobox-slot-list :refrigerator="refrigerator" :compartment="compartment" :section="currentSection" :currentRow="currentRow" @cryoboxSlotSelected="selectCryoboxSlot" @backPressed="currentRow=null"></cryobox-slot-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import RefrigeratorList from './Refrigerator/RefrigeratorList'
import CompartmentList from './Refrigerator/CompartmentList'
import RowList from './Refrigerator/RowList'
import CryoboxSlotList from './Refrigerator/CryoboxSlotsList'

import Ref3d from '../../App/Ref3D/Ref3d'
export default {
    components : {RefrigeratorList,CompartmentList,RowList,CryoboxSlotList,Ref3d},
    data(){
        return {
            mode : 'list',
            refrigerator: null,
            compartment : null,
            currentRow : null,
            currentSection : 0,
            cryoboxSlot : null,
        }
    },
    computed : {
        items(){
            return this.$store.getters.refrigerators
        }
    },
    methods : {
        selectRef(ref){
            this.refrigerator = ref
        },
        
        selectCompartment(compartment){
            this.compartment = compartment
        },

        selectSection(section){
            this.currentSection = section
        },
        
        selectRow(row){
            this.currentRow = row
        },
        
        selectCryoboxSlot(cryoboxSlot){
            this.cryoboxSlot = cryoboxSlot
        },
        

    }
}
</script>
