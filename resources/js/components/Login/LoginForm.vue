<template>
    <div>
        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="width:40px;"><i class="fa fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="username" aria-label="Amount (to the nearest dollar)" v-model="username" @keypress.enter="submit">
                    </div>

                    <div class="input-group mb-3" v-if="username_error">
                        <i class="text-danger">{{username_error}}</i>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" style="width:40px;"><i class="fa fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="password" aria-label="Amount (to the nearest dollar)" v-model="password" @keypress.enter="submit">
                    </div>

                    <div class="input-group mb-3" v-if="password_error">
                        <i class="text-danger">{{password_error}}</i>
                    </div>
                </div>

                <button type="button" class="btn btn-primary btn-block" @click="submit">LOGIN</button>
            </div>

            <div class="col-8">
                <!-- <img src="img/ritm_logo.png" height="75%" width="60%" alt=""> -->
                <img src="img/front.png" height="100%" width="100%" alt="">
            </div>
        </div>
        
    </div><!-- main div -->
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
            let {username,password} = this, err = [];
            if(username == null){
                this.username_error = "Please enter your valid username";
                err.push("username");
            }

            if(password == null){
                this.password_error = "Password can't be blank";
                err.push("password");
            }

            return err.length == 0;
        }
    }
}
</script>

<style>

</style>
