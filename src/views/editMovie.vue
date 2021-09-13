<template>
    <div class="eachForm" id="Edit-movie-form">
        <form @submit.prevent="submitEdit">
            <div id="Edit">
                <div class="each-form">
                    <h1>Edit Movie</h1>
                </div>
                <div class="each-form">
                    <label>Movie Name</label>
                    <input type="text" v-model="submitEditMovie.title">
                </div>
                <div class="each-form">
                    <label>Synopsis</label>
                    <input type="text" v-model="submitEditMovie.synopsis">
                </div>
                <div class="each-form">
                    <label>Rating</label>
                    <input type="text" v-model="submitEditMovie.rating">
                </div>
                <div class="each-form">
                    <label>Image URL</label>
                    <input type="file" @change="imgUrl">
                </div>
                <div class="each-form">
                    <label>Trailer URL</label>
                    <input type="text" v-model="submitEditMovie.trailerUrl">
                </div>
                <div class="each-form">
                    <label>Genre</label>
                    <select name="editGenreId" v-model="submitEditMovie.genreId">
                        <option v-for="genre in genresEdit" :key= 'genre.id' :value="genre.id">{{genre.name}}</option>
                    </select>
                </div>
                <div class="each-form">
                    <button type="submit">Edit Movie</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        submitEdit(){
            let newData = new FormData()
            // if(this.imgUrl){
            // }
            newData.append('fileInput', this.imgUrl)
            newData.append('status', this.submitEditMovie.status)
            newData.append('title', this.submitEditMovie.title)
            newData.append('synopsis', this.submitEditMovie.synopsis)
            newData.append('trailerUrl', this.submitEditMovie.trailerUrl)
            newData.append('rating', this.submitEditMovie.rating)
            newData.append('genreId', this.submitEditMovie.genreId)
            this.$emit('submitMovie', newData)
            console.log(this.submitEditMovie);
            // this.submitEditMovie = {title: '', synopsis: '', trailerUrl: '',status: '', rating: '', genreId: ''}
            // this.$emit('submitEditResult', input)
        },
        imageMethod(event){
            this.imgUrl = event.target.files[0]
        }
    },
    data(){
        return {
            imgUrl: "",
            submitEditMovie: {title: "", synopsis: "", trailerUrl: "", rating: "", status:"" ,genreId: ""}
        }
    },
    watch: {
        data(){
            this.submitEditMovie = this.data
        }
    },
    props: ['data', "genresEdit"]
}
</script>

<style>

</style>