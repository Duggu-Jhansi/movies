<template>
    <div class=" bg flex items-center justify-center min-h-screen bg-cover bg-center" >
        <div class="relative w-full max-w-md bg-white backdrop-filter backdrop-blur-md bg-opacity-50 p-8 rounded-md shadow-2xl">
        <h1 class="text-2xl font-semibold mb-4">Register</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-black-900">Username:</label>
            <input v-model="username" type="text" id="username" class="mt-1 p-2 w-full border rounded-md" required placeholder="Create Your Username"/>
            </div>
            <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-black-900">Password:</label>
            <input v-model="password" type="password" id="password" class="mt-1 p-2 w-full border rounded-md" required placeholder="Create Your Password" />
            </div>
            <button @click="reg(username, password)" type="submit" class="w-full bg-orange-500 text-black p-2 rounded-md">Register</button>
        </form>
        <p class="text-center text-green-900 mt-5" v-if="registered">User Registered</p>
        </div>
    </div>
  </template>
  
  <script setup>
  
  const users=usersList()
  const {$register}=useNuxtApp()
  const username=ref('')
  const password=ref('')
  const successMsg=ref('')
  const errorMsg=ref('')
  const registered=ref(false)
  function reg(){
    let a=$register(username.value,password.value)
    if(a="User Registered"){
        registered.value=true
        setTimeout(() => {
        navigateTo({ path: '/login' });
        }, 1000);
    }
  }
  </script>
  <style>
  .bg{
    background-image: url('https://c4.wallpaperflare.com/wallpaper/516/986/479/retro-blur-hi-tech-movie-wallpaper-preview.jpg');
    height:100vh;
    background-size:cover;
  }</style>