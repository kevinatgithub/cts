<template>
    <div>
        <print-button class="mb-3 float-right" elementID="bsf-test-results"></print-button>
        <div id="bsf-test-results">

            <table class="table table-sm table-striped table-bordered">
                <tbody>
                    <tr>
                        <th class="align-middle" style="width:150px;">BSF Machine</th>
                        <th class="align-middle"><b class="text-danger">{{machineName}}</b></th>
                        <th class="align-middle" style="width:150px;">BSF Med Tech</th>
                        <th class="align-middle"><b class="text-danger">{{referral.results.bsf.bsf_mt}}</b></th>
                        <th class="align-middle" style="width:150px;">Proficiency License</th>
                        <th class="align-middle"><b class="text-danger">{{referral.results.bsf.hiv_license}}</b></th>
                    </tr>
                </tbody>
            </table>
            <table class="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class="text-center">Lot Number</th>
                        <th class="text-center">Optical Density</th>
                        <th class="text-center">Cut-off Value</th>
                        <th class="text-center">Interpretation</th>
                        <th class="text-center">Date Tested</th>
                    </tr>
                </thead>
                <tbody v-for="(kit,i) in referral.results.bsf.kits" :key="i">
                    <tr>
                        <td rowspan="4" class="text-center align-middle">Kit # {{i+1}}</td>
                        <td colspan="6" class="text-right">
                            <i class="text-info mr-5">{{reagent(kit.reagent)}}</i>
                        </td>
                    </tr>
                    <tr v-for="(lot,i2) in kit.lots" :key="i2">
                        <td class="text-center">{{i2+1}}</td>
                        <td class="text-center">{{lot.lot_no}}</td>
                        <td class="text-center">{{lot.optical_density}}</td>
                        <td class="text-center">{{lot.cutoff_value}}</td>
                        <td class="text-center">{{lot.interpretation}}</td>
                        <td class="text-center">{{lot.date_tested}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import PrintButton from '../../App/PrintButton'
export default {
    components : {PrintButton},
    props : ['referral'],
    methods : {
        reagent(id){
            if(this.reagents){
                return this.reagents[id].name
            }
            return "Not Set"
        },
    },
    computed : {
        ...mapGetters(['machines','reagents']),
        machineName(){
            if(this.machines){
                return this.machines[this.referral.results.bsf.machine].name
            }
            return "Not Set"
        },
        
    }
}
</script>
