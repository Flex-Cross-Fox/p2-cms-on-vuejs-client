<template>
    <div class="navbar">
        <a v-if="isLogin" href="#" @click="changePage('home')" id="navbarHome">Home</a>
        <a v-if="isLogin" href="#" @click="changePage('add')" id="navbarAddMovie">Add Movie</a>
        <a v-if="!isLogin && currentlyPage == 'login'" href="#" @click="changePage('register')" id="navbarRegister">Register</a>
        <a v-if="isLogin" href="#" @click="changePage('login')" id="navbarLogout">Logout</a>
        <a v-if="!isLogin && currentlyPage == 'register'" href="#" @click="changePage('login')" id="navbarLogin">Login</a>
    </div>
</template>

<script>
export default {
    methods: {
        changePage(input){
            this.$emit('changePage' ,input)
        }
    }, props: ['isLogin', 'currentlyPage']
}
</script>

<style>

</style>