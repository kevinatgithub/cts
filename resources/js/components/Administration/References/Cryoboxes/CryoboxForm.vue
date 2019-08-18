<template>
    <div>
        <b-row>
            <b-col>
                <b-input-group class="mb-3">
                    <label for="" class="input-group-text" slot="prepend" style="width:150px;">
                        <i class="fa fa-th"></i>&nbsp;
                        Cryobox No.
                    </label>
                    <b-input placeholder="Cryobox No." v-model="cryobox_no"></b-input>
                </b-input-group>
                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend' style="width:150px;">
                        <i class='fa fa-columns'></i>&nbsp;
                        No. of Columns:
                    </label>
                    <b-input type="number" placeholder='No. of Columns' v-model='columns' @keypress.enter="save"></b-input>
                </b-input-group>

                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend' style="width:150px;">
                        <i class='fa fa-list'></i>&nbsp;
                        No. of Rows:
                    </label>
                    <b-input type="number" placeholder='No. of Rows' v-model='rows' @keypress.enter="save"></b-input>
                </b-input-group>
                <b-row>
                    <b-col>
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
            </b-col>
        </b-row>
        
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
            cryobox_no : null,
            rows : 9,
            columns : 9,
            isBusy : false,
        }
    },
    methods : {
        save(){
            this.isBusy = true
            let {cryobox_no,rows,columns} = this

            let that = this
            this.$store.dispatch('checkCryoboxNo',{
                cryobox_no, 
                exists : box => {
                    alert('Cryobox number akready registered!')
                    this.isBusy = false
                },
                ok(){
                    that.$store.dispatch('addCryobox',{
                        rows : rows*1, columns : columns*1, cryobox_no
                    }).then(r=>{
                        that.isBusy = false
                        that.$emit('done')
                    })
                }
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
