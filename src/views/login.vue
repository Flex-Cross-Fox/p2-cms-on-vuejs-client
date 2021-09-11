<template>
    <div class="eachForm" id="login-form">
        <form @submit.prevent="loginData">
            <div id="login">
                <div class="each-form">
                    <h1>Login</h1>
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="text" v-model="loginForm.email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password" v-model="loginForm.password">
                </div>
                <div class="each-form">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        changePage(input){
            this.$emit('changePage' ,input)
        },
        loginData(){
            this.$emit('loginForm', this.loginForm)
            this.loginForm = {email: '', password: ''}
        }
    },data(){
        return {
            loginForm: {email: '', password: ''}
        }
    }
}
</script>

<style>

</style>