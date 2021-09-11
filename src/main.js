// const instance = axios.create({
//     baseURL: 'http://localhost:3000'
// })

import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');


// new Vue({
//     el: '#app',
//     data: {
//         imageFile: '',
//         movieId: '',
//         editId: '',
//         genreId: '',
//         currentlyPage: 'login',
//         loginForm: {email: '', password: ''},
//         registerForm: {name: '', role: '', email: '', password: ''},
//         MovieForm: {title: '', synopsis: '', rating: '', imageUrl: '', trailerUrl: '', genreId: '', status: ""},
//         Movies : [],
//         genreName: []
//     },
//     methods: {
//         handleFile(event){
//             this.imageFile = event.target.files[0]
//         },
//         changePage(page){
//             this.currentlyPage = page
//         },
//         loginFormInput(){
//             console.log(this.loginForm);
//             axios({
//                 method: 'POST',
//                 url: 'http://localhost:3000/login',
//                 data: this.loginForm
//             })
//             .then((data) => {
//                 this.loginForm = {email: '', password: ''}
//                 this.currentlyPage = 'home'
//                 localStorage.setItem('token', data.data.token);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         registerFormInput(){
//             axios({
//                 method: 'POST',
//                 url: 'http://localhost:3000/register',
//                 data: this.registerForm
//             })
//             .then(() => {
//                 this.registerForm = {name: '', role: '', email: '', password: ''}
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         logoutFunction(){
//             localStorage.removeItem('token')
//             this.changePage('login')
//         },
//         getGenre(){
//             axios({
//                 method: "GET",
//                 url: 'http://localhost:3000/genres'
//             })
//             .then((data) => {
//                 this.genreName = data.data
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         showAddMovieForm(){
//             this.getGenre()
//             this.changePage('add')
//         }
//         ,
//         addMovieForm(){
//             let newData = new FormData()
//             console.log(this.MovieForm);
//             newData.append('fileInput', this.imageFile)
//             newData.append('status', this.MovieForm.status)
//             newData.append('title', this.MovieForm.title)
//             newData.append('synopsis', this.MovieForm.synopsis)
//             newData.append('trailerUrl', this.MovieForm.trailerUrl)
//             newData.append('rating', this.MovieForm.rating)
//             newData.append('genreId', this.MovieForm.genreId)
//             axios({
//                 method: 'POST',
//                 url: 'http://localhost:3000/movies',
//                 data: newData,
//                 headers: {token: localStorage.getItem('token') },
//                 contentType: false,
//                 processData: false
//             })
//             .then((data) => {
//                 console.log(data);
//                 this.changePage('home')
//                 this.isiHome()
//                 this.MovieForm = {title: '', synopsis: '', rating: '', imageUrl: '', trailerUrl: '', genreId: '', status: ""}
//             })    
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         checkLogin(){
//             if(localStorage.token){
//                 this.changePage('home')
//                 this.isiHome()
//             }else{
//                 this.changePage('login')
//             }
//         },
//         isiHome(){
//             this.changePage('home')
//             axios({
//                 method: 'GET',
//                 url: 'http://localhost:3000/movies',
//                 headers: {token: localStorage.getItem('token') }
//             })
//             .then((data) => {
//                 this.Movies = data.data
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         ShoweditMovie(id){
//             this.getGenre()
//             this.movieId = id
//             axios({
//                 method: "GET",
//                 url: "http://localhost:3000/movies/" + id,
//                 headers: {token: localStorage.getItem('token') }
//             })
//             .then((data) => {
//                 this.editId = id
//                 this.changePage('edit')
//                 this.genreId = data.data.genreId
//                 this.MovieForm = {genreId: data.data.genreId, imageUrl: data.data.imgUrl, rating: data.data.rating, status: data.data.status, synopsis: data.data.synopsis, title: data.data.title, trailerUrl: data.data.trailerUrl}
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         inactiveMovie(id){
//             axios({
//                 method: 'PATCH',
//                 url: 'http://localhost:3000/movies/' + id,
//                 headers: {token: localStorage.getItem('token') }
//             })
//             .then((data) => {
//                 console.log(data);
//                 this.isiHome()
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         deleteMovie(id){
//             axios({
//                 method: "DELETE",
//                 url: "http://localhost:3000/movies/" + id,
//                 headers: {token: localStorage.getItem('token') }
//             })
//             .then((data) => {
//                 console.log(data);
//                 this.isiHome()
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         },
//         submitEditMovie(){
//             let newData = new FormData()
//             newData.append('fileInput', this.imageFile)
//             newData.append('status', this.MovieForm.status)
//             newData.append('title', this.MovieForm.title)
//             newData.append('synopsis', this.MovieForm.synopsis)
//             newData.append('trailerUrl', this.MovieForm.trailerUrl)
//             newData.append('rating', this.MovieForm.rating)
//             newData.append('genreId', this.MovieForm.genreId)
//             axios({
//                 method: "PUT",
//                 url: "http://localhost:3000/movies/" + this.movieId,
//                 headers: {token: localStorage.getItem('token') },
//                 data: newData,
//                 contentType: false,
//                 processData: false
//             })
//             .then((data) => {
//                 console.log(data);
//                 this.changePage('home')
//                 this.isiHome()
//                 this.MovieForm = {title: '', synopsis: '', rating: '', imageUrl: '', trailerUrl: '', genreId: '', status: ""}
//             })    
//             .catch((err) => {
//                 console.log(err);
//             })
//         }
//     },
//     created(){
//         this.checkLogin()
//     }
// })