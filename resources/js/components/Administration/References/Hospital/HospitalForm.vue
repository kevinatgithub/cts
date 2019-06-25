<template>
    <b-modal id="hospital-form" header-bg-variant="primary" header-text-variant="white">
        <template slot="modal-title">
            <i class="fa fa-hospital-o"></i> {{record ? 'Update' : 'New'}}  Hospital
        </template>

        <b-input-group class='mb-3'>
            <label style="min-width:160px;" class='input-group-text' slot='prepend'>
                <i class='fa fa-hospital-o'></i>&nbsp;
                Hospital Name:
            </label>
            <b-input placeholder='Hospital Name' v-model='hospital.name' :state="name_state"></b-input>
            <b-form-invalid-feedback>Hospital name is invalid or already exists</b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class='mb-3'>
            <label style="min-width:160px;" class='input-group-text' slot='prepend'>
                <i class='fa fa-location-arrow'></i>&nbsp;
                Address:
            </label>
            <b-input placeholder='Address' v-model='hospital.address' :state="address_state"></b-input>
            <b-form-invalid-feedback>Hospital address is required</b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class='mb-3'>
            <label style="min-width:160px;" class='input-group-text' slot='prepend'>
                <i class='fa fa-stethoscope'></i>&nbsp;
                Pathologist:
            </label>
            <b-input placeholder='Pathologist' v-model='hospital.pathologist' :state="pathologist_state"></b-input>
            <b-form-invalid-feedback>Name of the Pathologist is invalid</b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class='mb-3'>
            <label style="min-width:160px;" class='input-group-text' slot='prepend'>
                <i class='fa fa-tint'></i>&nbsp;
                Blood Bank Code:
            </label>
            <b-input placeholder='Blood Bank Code' v-model='hospital.code' :state="code_state"></b-input>
            <b-form-invalid-feedback>Hospital Code invalid or already in use</b-form-invalid-feedback>
        </b-input-group>

        <b-input-group class='mb-3'>
            <label style="min-width:160px;" class='input-group-text' slot='prepend'>
                <i class='fa fa-map'></i>&nbsp;
                Region:
            </label>
            <b-input placeholder='Region' v-model='hospital.region' :state="region_state"></b-input>
            <b-form-invalid-feedback>The region of the hospital is required</b-form-invalid-feedback>
        </b-input-group>

        <template slot="modal-footer">
            <b-button variant="dark" :disabled="busy" @click="cancel">Cancel</b-button>
            <b-button variant="success" :disabled="busy" @click="saveHospital">
                <span v-if="!busy">
                    <i class="fa fa-plus"></i> Save
                </span>
                <span v-if="busy">
                    <i class="fa fa-spinner"></i> Saving..
                </span>
            </b-button>
        </template>
    </b-modal>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props : ['record'],
    data(){
        let hospital = {
            name : null,    address : null, pathologist : null, code : null, region : null,
        }
        hospital = _.extend(hospital,this.record)
        return {
            hospital,
            name_state : null, 
            address_state : null,
            pathologist_state : null,
            code_state : null,
            region_state : null,
            busy : false,
        }
    },
    methods : {
        async saveHospital(){
            if(!this.validate()){
                return
            }

            this.busy = true
            let response = false
            if(this.record){
                response = await this.$store.dispatch('updateHospital',this.hospital)
            }else{
                response = await this.$store.dispatch('addHospital',this.hospital)
            }
            if(response){
                this.busy = false
                this.$emit('savePressed',this.hospital)
                this.clearForm()
                this.$bvModal.hide('hospital-form')
            }
        },
        validate(){
            let {record,hospital : {name,address,pathologist,code,region}} = this

            this.name_state = null
            this.address_state = null
            this.pathologist_state = null
            this.code_state = null
            this.region_state = null

            if(!name){
                this.name_state = false
                return false
            }

            if(!address){
                this.address_state = false
                return false
            }

            if(!pathologist){
                this.pathologist_state = false
                return false
            }

            if(!code){
                this.code_state = false
                return false
            }

            if(!region){
                this.region_state =false
                return false
            }

            let exists = _.find(this.hospitals,h=>{
                return h.name.toUpperCase() == name.toUpperCase()
            })
            if(record){
                if(record.name.toUpperCase() == name.toUpperCase()){
                    // pass
                }else if(exists){
                    this.name_state = false
                    return false
                }
            }else{
                if(exists){
                    this.name_state = false
                    return false
                }
            }

            let exists2 = _.find(this.hospitals,h=>{
                return h.code.toUpperCase() == code.toUpperCase()
            })
            if(record){
                if(record.code.toUpperCase() == code.toUpperCase()){
                    // pass
                }else if(exists){
                    this.code_state = false
                    return false
                }
            }else{
                if(exists){
                    this.code_state = false
                    return false
                }
            }

            return true
        },
        clearForm(){
            let hospital = {
                name : null,    address : null, pathologist : null, code : null, region : null,
            }
            this.hospital = hospital
            this.name_state = null
            this.address_state = null
            this.pathologist_state = null
            this.code_state = null
            this.region_state = null
            this.busy = false
            this.$emit('cancelPressed',true)
        },
        cancel(){
            this.$emit('cancelPressed',true)
            this.clearForm()
            this.$bvModal.hide('hospital-form')
        }
    },
    computed : {
        ...mapGetters(['hospitals'])
    },
    watch : {
        record(){
            let hospital = {
                name : null,    address : null, pathologist : null, code : null, region : null,
            }
            this.hospital = _.extend(hospital,this.record)
        }
    }
}
</script>
