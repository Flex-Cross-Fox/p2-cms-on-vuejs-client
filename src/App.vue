<template>
<div>
  <Navbar :isLogin="isLogin" :currentlyPage="currentlyPage" @changePage="changePage"></Navbar>
  <Login v-if="currentlyPage == 'login'" @loginForm="submitLogin"></Login>
  <Register v-else-if="currentlyPage == 'register'" @submitRegister="submitRegister"></Register>
  <AddMovie v-else-if="currentlyPage == 'add'" :optionGenres="genres" @submitMovie="addMovie"></AddMovie>
  <EditMovie v-else-if="currentlyPage == 'edit'" :genresEdit="genres" :data="submitEditMovieValue" @submitMovie="submitEditMovie"></EditMovie>
  <Home v-else-if="currentlyPage == 'home'" :movies="allMovie" @inactiveMovie="inactiveMovie" @deleteMovie="deleteMovie" @showEditMovie="showEditMovie"></Home>
</div>
</template>

<script>
const baseURL = 'https://phase2-c2.herokuapp.com/'
import Navbar from './components/Navbar.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import AddMovie from './views/addMovie.vue'
import EditMovie from './views/editMovie.vue'
import Home from './views/home.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      currentlyPage: 'login',
      isLogin: false,
      genres: [],
      allMovie: [],
      editMovieForm: '',
      submitEditMovieValue: '',
      idMovieEdit: ''
    };
  },components: {
      Navbar ,
      Login  ,
      Register ,
      AddMovie ,
      EditMovie ,
      Home
  },methods: {
      changePage(input){
        this.currentlyPage = input
        if(this.currentlyPage == 'add'){
          this.getGenre()
        }else if(this.currentlyPage == 'home'){
          this.getAllMovie()
        }
      },
      submitLogin(input){
        axios({
          method: "POST",
          url: baseURL + "login",
          data: input
        })
        .then((data) => {
          this.currentlyPage = 'home'
          localStorage.setItem('token',data.data.token)
        })
        .catch((err) => {
          console.log(err);
        })
      },
      submitRegister(input){
        axios({
          method: 'POST',
          url: baseURL + "register",
          data: input
        })
        .then((data) => {
          this.currentlyPage = 'login'
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
      },
      getGenre(){
        console.log('masuk');
        axios({
          method: 'GET',
          url: baseURL + "genres"
        })
        .then((data) => {
          console.log(data.data);
          this.genres = data.data
        })
        .catch((err) => {
          console.log(err);
        })
      },
      addMovie(input){
        axios({
          method: "POST",
          url: baseURL + "movies",
          data: input,
          headers: {token: localStorage.getItem('token') },
          contentType: false,
          processData: false
        })
        .then((data) => {
          console.log(data);
          console.log('berhasil');
          this.changePage = 'home'
        })
        .catch((err) => {
          console.log(err);
        })
      },
      getAllMovie(){
        axios({
          method: "GET",
          url: baseURL + "movies",
          headers: {token: localStorage.getItem('token') }
        })
        .then((data) => {
          this.allMovie = data.data
          console.log(this.allMovie);
        })
        .catch((err) => {
          console.log(err);
        })
      },
      deleteMovie(id){
        axios({
          method: "DELETE",
          url: baseURL + "movies/" + id,
          headers: {token: localStorage.getItem('token') }
        })
        .then(() => {
          this.changePage('home')
        })
        .catch((err) => {
          console.log(err);
        })
      },
      inactiveMovie(id){
        axios({
          method: "PATCH",
          url: baseURL + "movies/" + id,
          headers: {token: localStorage.getItem('token') }
        })
        .then((data) => {
          this.changePage('home')
        })
        .catch((err) => {
          console.log(err);
        })
      },
      showEditMovie(id){
        this.idMovieEdit = id
        this.currentlyPage = 'edit'
        axios({
          method: "GET",
          url: baseURL + "movies/" + id,
          headers: {token: localStorage.getItem('token') }
        })
        .then((data) => {
          this.getGenre()
          this.submitEditMovieValue = data.data
          console.log(this.submitEditMovieValue);
        })
        .catch((err) => {
          console.log(err);
        })
      },
      submitEditMovie(data){
        console.log(data);
        axios({
          method: "PUT",
          url: baseURL + "movies/" + this.idMovieEdit,
          data: data,
          headers: {token: localStorage.getItem('token') },
          contentType: false,
          processData: false
        })
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        })
      }
  },created(){
    if(localStorage.token){
      this.currentlyPage = 'home'
      this.isLogin = true
      this.getAllMovie()
    }else{
      this.currentlyPage = 'login'
      this.isLogin = false
    }
  },
};
</script>

<style scoped>
</style>