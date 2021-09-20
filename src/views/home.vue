<template>
    <div id="MovieTable">
    <table id="table-Movie">
        <tr>
            <th>Movie</th>
            <th>Synopsis</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Video</th>
            <th>Genre</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        <tr v-for="movie in movies" :key="movie.id" >
            <td>{{ movie.title }}</td>
            <td>{{ movie.synopsis }}</td>
            <td>{{ movie.rating }}</td>
            <td>{{ movie.imgUrl }}</td>
            <td>{{ movie.trailerUrl }}</td>
            <td>{{ movie.Genre.name }}</td>
            <td>{{ movie.status }}</td>
            <td><a href="#" @click="ShoweditMovie(movie.id)">Edit</a> || <a href="#" @click="deleteMovie(movie.id)">Delete</a> || <a href="#" @click="inactiveMovie(movie.id)">Inactive</a></td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    methods:{
        ShoweditMovie(id){
            console.log(id, ' ini edit movie');
            this.$emit('showEditMovie', id)
        },
        deleteMovie(id){
            console.log(id,' ini delete movie');
            this.$emit('deleteMovie', id)
        },
        inactiveMovie(id){
            console.log(id, ' ini inactive movie');
            this.$emit('inactiveMovie', id)
        }
    },
    props: ['movies']
}
</script>

<style>

</style>