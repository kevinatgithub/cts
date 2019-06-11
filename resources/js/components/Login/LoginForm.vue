<template>
    <b-container>
        <b-row>
            <b-col lg="4" md="6" sm="12">
                <b-form-group>
                    <b-input-group class="mb-3">
                        <span slot="prepend" class="input-group-text" style="width:40px;"><i class="fa fa-user"></i></span>
                        <b-input placeholder="username" v-model="username" @keypress.enter="submit" :state="username_error"></b-input>
                        <b-form-invalid-feedback :state="username_error">Please enter your valid username</b-form-invalid-feedback>
                    </b-input-group>
                    
                    <b-input-group class="mb-3">
                        <span slot="prepend" class="input-group-text" style="width:40px;"><i class="fa fa-key"></i></span>
                        <b-input placeholder="password" v-model="password" @keypress.enter="submit" type="password" :state="password_error"></b-input>
                        <b-form-invalid-feedback :state="password_error">Password can't be blank</b-form-invalid-feedback>
                    </b-input-group>

                    <b-button block variant="primary" @click="submit">LOGIN</b-button>
                </b-form-group>
            </b-col>
            <b-col lg="8" md="6" sm="12">
                <b-img src="img/front.png" fluid alt="CTS Logo"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return {
            username : null,
            password : null,
            username_error : null,
            password_error : null
        }
    },
    methods : {
        submit(){
            this.username_error = null;
            this.password_error = null;
            if(this.validate()){
                alert('logging in');
            }
        },
        validate(){
            let {username,password} = this;
            if(username == null){
                this.username_error = false;
            }

            if(password == null){
                this.password_error = false;
            }

            return username && password;
        }
    }
}
</script>

<style>

</style>
