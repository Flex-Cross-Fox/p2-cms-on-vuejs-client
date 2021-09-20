<template>
    <div class="eachForm" id="register-form">
        <form @submit.prevent="submitRegister">
            <div id="register">
                <div class="each-form">
                    <h1>Register</h1>
                </div>
                <div class="each-form">
                    <label>Name</label>
                    <input type="text" v-model="register.name">
                </div>
                <div class="each-form">
                    <label>Role</label>
                    <input type="text" v-model="register.role">
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="email" v-model="register.email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password" v-model="register.password">
                </div>
                <div class="each-form">
                    <button type="submit">Register</button>
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
        submitRegister(){
            this.$emit('submitRegister', this.register)
            this.register = {name: '', role: '', email: '', password:''}
        }
    },
    data(){
        return {
            register: {name: '', role: '', email: '', password:''}
        }
    }
}
</script>

<style>

</style>