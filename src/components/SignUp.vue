<template>
    <img class="logo" src="../assets/logo.svg" alt="logo restaurant">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your Name">
        <input type="text" v-model="email" placeholder="Enter your Email">
        <input type="password" v-model="password" placeholder="Enter your Password">
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name : "SignUp",
    data(){
        return {
            name: "",
            email: "",
            password: "",
        }
    },
    methods: {
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log(result);
            if(result.status==201){
                alert("signUp done !!");
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}
.register input {
    width: 300px;
    height: 20px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
}
</style>