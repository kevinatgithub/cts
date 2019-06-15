<template>
    <div>
        <comp-url>Receive / RegisterLoc / Cryobox</comp-url>
        <div class="card text-white border-danger bg-danger">
            <div class="card-header">
                <div class="form-group">
                    <div class="row mt-3">
                        <label class="col-sm-4" for="inputDefault"><h5>Cryobox #:</h5></label>
                        <input type="text" class="form-control col-sm-8" placeholder="Scan/ Enter the Cryobox Serial #" id="inputDefault" v-model="cryoboxnum">
                    </div>
                </div>
            </div> <!-- end card-header -->

            <b-list-group>
                <b-list-group-item v-for="(row,i) in cryobox" :key="i">
                    <b-row>
                        <b-col cols="1" class="ml-2 text-center" v-for="r in row" :key="r">
                            <b-button style="min-width:50px;font-size:12px;" variant="outline-info">{{r}}</b-button>
                        </b-col>
                    </b-row>
                </b-list-group-item>
            </b-list-group>

            
            <div class="card-body bg-light text-center">
                <a href="#" class="card-link">prev</a>
                <a href="#" class="card-link">next</a>
            </div> <!-- card-body -->
            <div class="card-footer text-center">
                {{cryoboxnum}}
            </div> <!-- card-footer -->
        </div> <!-- card cryobox-->
        
    </div>
</template>

<script>
import Cryo from './CryoboxData'
export default {
    data(){
        return{
            cryobox : Cryo.cryobox,
            cryoboxnum : '19-017',
        }
    }
}
</script>

<style>

</style>

