<template>
    <img class="logo" src="../assets/logo.svg" alt="logo restaurant">
    <h1>Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter your Email">
        <input type="password" v-model="password" placeholder="Enter your Password">
        <button>Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
}
</script>