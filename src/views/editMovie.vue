<template>
    <div class="eachForm" id="Edit-movie-form">
        <form @submit.prevent="submitEdit">
            <div id="Edit">
                <div class="each-form">
                    <h1>Edit Movie</h1>
                </div>
                <div class="each-form">
                    <label>Movie Name</label>
                    <input type="text" v-model="data.title">
                </div>
                <div class="each-form">
                    <label>Synopsis</label>
                    <input type="text" v-model="data.synopsis">
                </div>
                <div class="each-form">
                    <label>Rating</label>
                    <input type="text" v-model="data.rating">
                </div>
                <div class="each-form">
                    <label>Image URL</label>
                    <input type="file" @change="imgUrl">
                </div>
                <div class="each-form">
                    <label>Trailer URL</label>
                    <input type="text" v-model="data.trailerUrl">
                </div>
                <div class="each-form">
                    <label>Genre</label>
                    <select name="editGenreId" v-model="data.genreId">
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
            this.submitEditMovie = {title: '', synopsis: '', trailerUrl: '',status: '', rating: '', genreId: ''}
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
    props: ['data', "genresEdit"]
}
</script>

<style>

</style>