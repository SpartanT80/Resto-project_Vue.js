<template>
    <HeaderPage />
    <h1>Hello {{ name }}, welcome on the Home Page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        <tr v-for="item in restaurants" :key=item.id>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td><router-link :to="'/update/' + item.id">Update</router-link></td>
            <td><button v-on:click="deleteRestaurant(item.id)">Delete</button></td>

        </tr>
    </table>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        HeaderPage
    },
    methods: {
        async deleteRestaurant(id) {
            const result = await axios.delete(`http://localhost:3000/restaurants/` + id);
            if (result.data){
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let result = await axios.get(`http://localhost:3000/restaurants`);
            console.log(result);
            this.restaurants = result.data;
        },
    },
    mounted() {
        this.loadData()
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>