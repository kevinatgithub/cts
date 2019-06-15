<template>
    <div>
        <comp-url>Login</comp-url>
        <h3>User Login</h3>
        <hr>
            <div class="content mt-5">
                
                <login-form></login-form>
                
            </div>
    </div>
</template>

<script>
import LoginForm from './Login/LoginForm'
export default {
    components: {LoginForm}
}
</script>

<style>

</style>

