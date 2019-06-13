<template>
    <div>
        <comp-url>Administration / Referemces / Refrigerator</comp-url>
        <b-row>

            <!-- Refrigerator -->
            <b-col v-show="!refrigerator">
                <refrigerator-list :items="items" @refSelected="selectRef" @savePressed="newRefrigerator"></refrigerator-list>
            </b-col>

            <!-- Compartments -->
            <b-col v-if="refrigerator && !compartment">
                <compartment-list :refrigerator="refrigerator" @compartmentSelected="selectCompartment" @savePressed="newCompartment" @backPressed="refrigerator=null"></compartment-list>
            </b-col>

            <!-- Rows -->
            <b-col v-if="compartment && !currentRow">
                <row-list :compartment="compartment" @rowSelected="selectRow" @backPressed="compartment=null" @savePressedFront="newRowFront" @savePressedBack="newRowBack"></row-list>
            </b-col>

            <!-- Cryobox Slots -->
            <b-col v-if="currentRow">
                <cryobox-slot-list :currentRow="currentRow" @cryoboxSlotSelected="selectCryoboxSlot" @backPressed="currentRow=null" @savePressed="newSlot"></cryobox-slot-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import RefrigeratorList from './Refrigerator/RefrigeratorList'
import CompartmentList from './Refrigerator/CompartmentList'
import RowList from './Refrigerator/RowList'
import CryoboxSlotList from './Refrigerator/CryoboxSlotsList'

export default {
    components : {RefrigeratorList,CompartmentList,RowList,CryoboxSlotList},
    data(){
        return {
            mode : 'list',
            items : [
                {
                    name : "Ref #1",
                    compartments : [
                        {
                            compartment_name : "C #1",
                            sections : [
                                {
                                    rows : [
                                        {
                                            row_name : "FR #1",
                                            cryoboxSlots : [
                                                { name : "FR1C1"}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    rows : [
                                        {
                                            row_name : "BR #1",
                                            cryoboxSlots : [
                                                { name : "BR1C1"}
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ],
            refrigerator: null,
            compartment : null,
            currentRow : null,
            cryoboxSlot : null,
        }
    },
    methods : {
        selectRef(ref){
            this.refrigerator = ref
        },
        newRefrigerator(ref){
            this.items.push(ref)
        },
        selectCompartment(compartment){
            this.compartment = compartment
        },
        newCompartment(compartment){
            if(!this.refrigerator.compartments){
                this.refrigerator.compartments = []
            }
            this.refrigerator.compartments.push(compartment)
        },
        selectRow(row){
            this.currentRow = row
        },
        newRowFront(row){
            if(!this.compartment.sections[0].rows){
                this.compartment.sections[0].rows = []
            }
            this.compartment.sections[0].rows.push(row)
        },
        newRowBack(row){
            if(!this.compartment.sections[1].rows){
                this.compartment.sections[1].rows = []
            }
            this.compartment.sections[1].rows.push(row)
        },
        selectCryoboxSlot(cryoboxSlot){
            this.cryoboxSlot = cryoboxSlot
        },
        newSlot(slot){
            if(!this.currentRow.cryoboxSlots){
                this.currentRow.cryoboxSlots = []
            }
            this.currentRow.cryoboxSlots.push(slot)
        }
    }
}
</script>
