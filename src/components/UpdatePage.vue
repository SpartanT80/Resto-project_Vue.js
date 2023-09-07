<template>
    <HeaderPage/>
    <h1>Hello User, welcome on the Update Restaurant Page</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
    name: 'UpdatePage',
    components:{
        HeaderPage
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>