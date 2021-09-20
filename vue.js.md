cara pakai vue.js itu untuk mengganti kan jquery

kita semua tulis di dalam new Vue({

})

isi nya seperti ini

sebelum mulai tulis, kita butuh tulis script nya di html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
di bagian paling bawah sebelum main.js

dan kita akan pakai axios untuk hit ke server untuk ganti ajax
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
dibagian paling bawah sebelum main.js

axios.create({
    baseURL: 'url nya'
})

vue mengganti kan jquery

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

past itu di html untuk memakai fitur vue.js
di paling bawah sebelum main.js


new Vue({
    el: 'isi nama id bersama # atau . nya, cukup 1 saja tapi yang paling luar itu, contoh #main',
    data: {
        nameKey: value
    },
    methods: {
        namaMethod(){
            
        }
    }
})
kita mau pakai nameKey pakai this.nameKey (untuk main.js)


kita nanti ganti isi yang ada di html dengan nameKey, jadi valuenya di ganti juga

v-text tujuan nya untuk menampilkan sebuah text
v-text bisa ganti kan {{ nama Key }}
contoh <h1 v-text='namaKey'></h1>

v-html untuk br atau hr table dll yang html tapi bentuk html

cara tulis untuk 

v-bind:src='nama key' (untuk foto dan v-bind tulis di dalam tag img) bisa juga hanya tulis :src='nama key'

v-if adalah condition yang lain
contoh
v-if="nama key di vue === 'kondisi'"

v-on itu adalah onclick
v-on:click

cara pakai v-on:click atau @click ="namaMethod(' pakai titik 1 kalau ada isi')"


kita bisa ganti kan v-on == @

v-for="todo in todos" :key="todo.id"

1. menentukan halaman apa yang akan ditampilkan terlebih dahulu
2. bagaimana kita pindah dari satu halaman ke halaman lain
3. menjalankan fungsionalitas yang ada, contoh nya form login

note:
v-model => handle input / terima data
v-bind => menampilkan data dari state, src, alt, class
v-for, :key (harus sesuatu yang unique) => looping data
v-on:click / @click => handle click event
v-on:submit / @submit => handle submit event
{{ title }} => menampilkan title