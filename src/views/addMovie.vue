<template>
    <div class="eachForm" id="add-movie-form">
        <form @submit.prevent="submitMovie">
            <div id="add">
                <div class="each-form">
                    <h1>Add Movie</h1>
                </div>
                <div class="each-form">
                    <label>Movie Name</label>
                    <input type="text" v-model="movieForm.title">
                </div>
                <div class="each-form">
                    <label>Synopsis</label>
                    <input type="text" v-model="movieForm.synopsis">
                </div>
                <div class="each-form">
                    <label>Rating</label>
                    <input type="number" v-model="movieForm.rating">
                </div>
                <div class="each-form">
                    <label>Image</label>
                    <input type="file" @change="imgaeMethod">
                </div>
                <div class="each-form">
                    <label>Video URL</label>
                    <input type="text" v-model="movieForm.trailerUrl">
                </div>
                <div class="each-form">
                    <label>Genre</label>
                    <select name="genre" v-model="movieForm.genreId">
                        <option v-for="genre in optionGenres" :key= 'genre.id' :value="genre.id">{{genre.name}}</option>
                    </select>
                </div>
                <div class="each-form">
                    <button type="submit">Add Movie</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        imgaeMethod(event){
            this.imgUrl = event.target.files[0]
        },
        changePage(input){
            this.$emit('changePage' ,input)
        },
        submitMovie(){
            let newData = new FormData()
            newData.append('status', this.movieForm.status)
            newData.append('title', this.movieForm.title)
            newData.append('synopsis', this.movieForm.synopsis)
            newData.append('trailerUrl', this.movieForm.trailerUrl)
            newData.append('rating', this.movieForm.rating)
            newData.append('genreId', this.movieForm.genreId)
            newData.append('fileInput', this.imgUrl)
            this.$emit('submitMovie', newData)
            this.movieForm = {title: '', synopsis: '', trailerUrl: '', rating: '', genreId: ''}
        }
    },
    data(){
        return {
            movieForm: {title: '', synopsis: '', trailerUrl: '', rating: '', genreId: ''},
            imgUrl: ''
        }
    },props: ['optionGenres']
}
</script>

<style>

</style>