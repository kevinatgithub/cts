<template>
    <b-modal no-footer id="verifier" header-bg-variant="danger" header-text-variant="white">
        <template slot="modal-title">
            <i class="fa fa-lock"></i>  Confirmatory Verification Check
        </template>
        <b-row>
            <b-col>
                <small class="text-primary">
                    <i class="fa fa-info-circle"></i> Please call another staff on duty to verifiy before proceeding
                </small>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend' style="width:120px;">
                        <i class='fa fa-user'></i>&nbsp;
                        Username:
                    </label>
                    <b-input placeholder='Username' ref="username" v-model='username' type="password" :state="username_state" @keypress.enter="ok"></b-input>
                    <b-form-invalid-feedback>
                        Please provide a valid verifier username
                    </b-form-invalid-feedback>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-input-group class='mb-3'>
                    <label class='input-group-text' slot='prepend' style="width:120px;">
                        <i class='fa fa-lock'></i>&nbsp;
                        Password:
                    </label>
                    <b-input placeholder='Password' v-model='password' type="password" :state="password_state" @keypress.enter="ok"></b-input>
                    <b-form-invalid-feedback>
                        Password of the second valid verifier username
                    </b-form-invalid-feedback>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row v-if="error">
            <b-col>
                <p class="text-danger">
                    <i class="fa fa-warning"></i> Verification failed, please check verifier username/password
                </p>
            </b-col>
        </b-row>
        <template slot="modal-footer">
            <b-row>
                <b-col class="text-right">
                    <b-button variant="dark" @click="cancel" :disabled="busy">Cancel</b-button>
                    <b-button variant="danger" @click="ok" :disabled="busy">
                        <span v-if="!busy">Verify</span>
                        <span v-if="busy"><i class="fa fa-spinner"></i> Verifying ..</span>
                    </b-button>
                </b-col>
            </b-row>
        </template>
    </b-modal>
</template>

<script>
export default {
    data(){
        return {
            username : null, username_state : null,
            password : null, password_state : null,
            error : null, busy : false
        }
    },
    mounted(){
        let that = this
        this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
            if(modalId == 'verifier'){
                if(that.$refs.username != undefined){
                    that.$refs.username.focus()
                }
            }
        })
    },
    methods : {
        ok(){
            if(!this.validate()){
                return
            }
            this.busy = true
            this.username_state = null
            this.password_state = null
            this.$store.dispatch('attemptLogin',{
                username : this.username, password : this.password,
            }).then(response=> {
                this.busy = false
                this.username = null
                this.password = null
                if(!response){
                    this.error = true
                }else{
                    this.$bvModal.hide('verifier')
                    this.$emit('ok',response)
                }
            })
        },
        cancel(){
            this.username = null 
            this.username_state = null
            this.password = null
            this.password_state = null
            this.error = null
            this.busy = false
            this.$bvModal.hide('verifier')
        },
        validate(){
            let {username,username_state,password,password_state,error} = this
            if(!username){
                this.username_state = false
            }
            if(!password){
                this.password_state = false
            }
            return username && password            
        }
    }
}
</script>
