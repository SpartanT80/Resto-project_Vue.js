<template>
    <HeaderPage />
    <h1>Hello User, welcome on the Add restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="restaurants.name">
        <input type="text" name="address" placeholder="Enter address" v-model="restaurants.address">
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurants.contact">
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name: 'AddPage',
    components: {
        HeaderPage
    },
    data() {
        return {
            restaurants: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            alert("Restaurant Added");
            const result = await axios.post(`http://localhost:3000/restaurants`, {
                name: this.restaurants.name,
                address: this.restaurants.address,
                contact: this.restaurants.contact
            });
            if(result.status == 201){
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>