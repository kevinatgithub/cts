<template>
    <div>
        <comp-url>Arministration / References / Cryobox</comp-url>
        <h5>Cryobox</h5>
        <hr>
        <b-row>
            <b-col>
                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-columns'></i>&nbsp;
                        No. of Columns:
                    </label>
                    <b-input type="number" placeholder='No. of Columns' v-model='columns' :disabled="!modify" @keypress.enter="save"></b-input>
                </b-input-group>

                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend'>
                        <i class='fa fa-list'></i>&nbsp;
                        No. of Rows:
                    </label>
                    <b-input type="number" placeholder='No. of Rows' v-model='rows' :disabled="!modify" @keypress.enter="save"></b-input>
                </b-input-group>
                <b-row>
                    <b-col v-if="!modify">
                        <b-button variant="info" @click="modify=true">Edit Values</b-button>
                    </b-col>
                    <b-col v-if="modify">
                        <b-button variant="success" @click="save" :disabled="isBusy">{{isBusy ? 'Saving..' : 'Save'}}</b-button>
                        <b-button varient="danger" :disabled="isBusy">Cancel</b-button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <table class="table table-bordered table-striped">
                    <tbody>
                        <tr v-for="(r,i) in nrows" :key="i">
                            <td v-for="(c,i2) in ncolumns" :key="i2" style="font-size:10px;" class="text-center">
                                {{i2+1}}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <b-img width="400" src="https://assets.fishersci.com/TFS-Assets/LCD/product-images/F80681~p.eps-650.jpg"></b-img>
            </b-col>
        </b-row>
        {{$store.state.cryobox}}
        

        
    </div>
</template>


<script>
export default {
    mounted(){
        let {cryobox} = this.$store.getters
        this.rows = cryobox.rows
        this.columns = cryobox.columns
    },
    data(){
        return {
            modify : false,
            rows : 9,
            columns : 9,
            isBusy : false,
        }
    },
    methods : {
        save(){
            this.isBusy = true
            let {rows,columns} = this
            this.$store.dispatch('setCryobox',{
                rows : rows*1, columns : columns*1
            }).then(r=>{
                this.isBusy = false
                this.modify = false
            })
        }
    },
    computed : {
        nrows(){
            let rows = [];
            for(let i = 0; i < this.rows; i++){
                rows.push(null)
            }
            return rows;
        },
        ncolumns(){
            let columns = [];
            for(let i = 0; i < this.columns; i++){
                columns.push(null)
            }
            return columns;
        },
    }
}
</script>
