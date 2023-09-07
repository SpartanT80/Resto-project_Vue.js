<template>
    <router-view />
</template>

<script>

export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
}
body{
    padding: 0;
    margin: 0;
}
.logo {
    width: 100px;
}

.register input,
.login input {
    width: 300px;
    height: 20px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.register button,
.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
}</style>
