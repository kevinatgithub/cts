<template>
    <div>
        <h3 class="text-primary">Manage Users</h3>
        <hr>
        <b-breadcrumb :items="['Administration','Manage Users']"></b-breadcrumb>
        <b-row>
            <b-col>
                <b-table 
                class="mt-3"
                :fields="fields"
                :items="users"
                :busy="busy"
                per-page="20"
                :current-page="currentPage"
                striped
                head-variant="dark"
                >
                    <template slot="table-busy">
                        <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
                    </template>
                     <template slot="options" slot-scope="data">
                        <b-button variant="dark" size="sm" @click="current = data.item"><i class="fa fa-pencil"></i></b-button>
                        <b-button variant="danger" size="sm" @click="current = data.item" v-b-modal.confirm-delete><i class="fa fa-remove"></i></b-button>
                    </template>
                </b-table>

                <b-pagination
                    v-model="currentPage"
                    :per-page="20"
                    :total-rows="users.length"
                    >
                </b-pagination>
            </b-col>
            <b-col>
                <h5 class="text-primary mt-3">{{current ? 'Update' : 'New'}} User</h5>
                <hr>
                <b-input-group class="mb-3">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-user"></i>&nbsp;Username :
                    </label>
                    <b-input placeholder="Username" v-model="form.username" :disabled="formBusy || current != null" :state="form.username_state"></b-input>
                    <b-form-invalid-feedback>Username invalid or already taken</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3" v-if="!current">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-lock"></i>&nbsp;password:
                    </label>
                    <b-input placeholder="Password" v-model="form.password" :disabled="formBusy" :state="form.password_state" type="password"></b-input>
                    <b-form-invalid-feedback>Password field is required</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3" v-if="!current">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-lock"></i>&nbsp;Confirm Password:
                    </label>
                    <b-input placeholder="Confirm Password" v-model="form.confirm" :disabled="formBusy" :state="form.confirm_state" type="password"></b-input>
                    <b-form-invalid-feedback>Password did not match</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-user"></i>&nbsp;Full Name:
                    </label>
                    <b-input placeholder="Full Name" v-model="form.name" :disabled="formBusy" :state="form.name_state"></b-input>
                    <b-form-invalid-feedback>Full Name is required</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                    <label for="" class="input-group-text" slot="prepend">
                        <i class="fa fa-user"></i>&nbsp;Position:
                    </label>
                    <b-input placeholder="Position" v-model="form.position" :disabled="formBusy" :state="form.position_state"></b-input>
                    <b-form-invalid-feedback>Position is required</b-form-invalid-feedback>
                </b-input-group>
                
                <div class="text-right">
                    <b-button variant="success" :disabled="formBusy" v-b-modal.confirm-save>
                        <span v-if="!formBusy">
                            {{current ? 'Save Changes' : 'Add User'}}
                        </span>
                        <span v-if="formBusy">
                            <i class="fa fa-spinner"></i> Saving..
                        </span>
                    </b-button>
                    <b-button variant="dark" :disabled="formBusy">Clear Form</b-button>
                </div>
            </b-col>
        </b-row>

        <b-modal id="confirm-save" :title="current ? 'Save Changes' : 'Add New User'" header-bg-variant="info" header-text-variant="light" @ok="save">
            Confirm {{current ? 'change user details' : 'add new user'}} ?
        </b-modal>

        <b-modal id="confirm-delete" title="Delete User" header-bg-variant="danger" header-text-variant="light" @ok="deleteUser">
            Are you sure you wan't to delete user account?
        </b-modal>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            fields : ['username','name','position','options'],
            busy : false,
            formBusy : false,
            currentPage : 1,
            current : null,
            form : {
                username : null,
                username_state : null,
                password : null,
                password_state : null,
                confirm : null,
                confirm_state : null,
                name : null,
                name_state : null,
                position : null,
                position_state : null,
            },
        }
    },
    computed : {
        ...mapGetters(['users'])
    },
    methods : {
        async save(){
            if(!this.validate()){
                return
            }
            this.formBusy = true
            this.busy = true

            let request = null

            if(this.current){
                let user = {
                    username : this.form.username,
                    name : this.form.name,
                    position : this.form.position,
                }
                request = await this.$store.dispatch('updateUser',user)
            }else{
                let user = {
                    username : this.form.username,
                    name : this.form.name,
                    position : this.form.position,
                    password : this.form.password,
                    facility_cd : 'RITM'
                }
                request = await this.$store.dispatch('newUser',user)
            }

            if(request.data){
                this.$store.dispatch('fetchUsers')
                this.formBusy = false
                this.busy = false
                this.form = {
                    username : null,
                    password : null,
                    confirm : null,
                    name : null,
                    position : null,
                }
                this.current = null
            }
        },
        validate(){
            this.form.username_state = null
            this.form.password_state = null
            this.form.confirm_state = null
            this.form.name_state = null
            this.form.position_state = null
            let {current,form :{username, name, password, confirm, position}} = this

            if(!username){
                this.form.username_state = false
                return
            }
            let exists = _.find(this.users,u=>u.username.toUpperCase() == username.toUpperCase())

            if(!current && exists){
                this.form.username_state = false
                return
            }

            if(!current && !password){
                this.form.password_state = false
                return
            }

            if(!current && password != confirm){
                this.form.confirm_state = false
                return
            }
            
            if(!name){
                this.form.name_state = false
                return
            }

            if(!position){
                this.form.position_state = false
                return
            }

            return true
        },
        async deleteUser(){
            this.formBusy = true
            this.busy = true
            let request = await this.$store.dispatch('deleteUser',this.current)
            if(request.data){
                this.$store.dispatch('fetchUsers')
                this.current = null
                this.formBusy = false
                this.busy = false
            }
        },
    },
    watch : {
        current(){
            if(!this.current){
                return
            }
            _.extend(this.form,this.current)
        }
    }
}
</script>