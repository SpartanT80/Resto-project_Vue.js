<template>
    <HeaderPage/>
    <h1>Hello User, welcome on the Delete restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="restaurants.name">
        <input type="text" name="address" placeholder="Enter address" v-model="restaurants.address">
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurants.contact">
        <button type="button" v-on:click="deleteRestaurant">Delete a Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
    name: 'DeletePage',
    components:{
        HeaderPage
    },
    data(){
        return {
            restaurants : {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        addRestaurant(){
            alert("Restaurant Deleted");
            console.log(this.restaurants)
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>