<template>
    <img class="logo" src="../assets/logo.svg" alt="logo restaurant">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter your Name">
        <input type="text" placeholder="Enter your Email">
        <input type="password" placeholder="Enter your Password">
        <button>Sign Up</button>
    </div>
</template>

<script>
export default {
    name : "SignUp",
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