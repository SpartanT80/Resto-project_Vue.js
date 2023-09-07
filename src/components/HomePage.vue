<template>
    <h1>Hello User, welcome on the Home Page</h1>
</template>

<script>
export default {
    name: 'HomePage',
    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>