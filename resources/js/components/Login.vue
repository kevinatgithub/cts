<template>
    <div>
        <comp-url>Login</comp-url>
        
            <div class="content mt-5">
                
                <login-form v-if="!user"></login-form>
                <dashboard v-if="user" />
            </div>
    </div>
</template>

<script>
import Dashboard from './Dashboard'
import LoginForm from './Login/LoginForm'
export default {
    components: {LoginForm,Dashboard},
    computed : {
        user(){
            return this.$session.get('user')
        }
    }
}
</script>

<style>

</style>

