<template>
    <HeaderPage />
    <h1>Hello User, welcome on the Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="restaurants.name">
        <input type="text" name="address" placeholder="Enter address" v-model="restaurants.address">
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurants.contact">
        <button type="button" v-on:click="addRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name: 'UpdatePage',
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
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get('http://localhost:3000/restaurants/'+ this.$route.params.id);
        this.restaurants = result.data;
    }
}
</script>