<template>
    <div class=" bg1 relative flex items-center justify-center min-h-screen bg-cover bg-center">
        
        <div class="relative z-10 flex justify-center items-center h-full">
            <div class="bg-violet-200 p-8 rounded-md shadow-lg max-w-md">
            <h1 class="text-2xl font-semibold mb-4 text-black">Login</h1>
            <form @submit.prevent="login">
                <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-black-600">Username:</label>
                
                <input v-model="username" type="text" id="username" class="mt-1 p-2 w-full border rounded-md" required  placeholder="Enter Your UserName"/>
                </div>
                <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-black-600">Password:</label>
                <input v-model="password" type="password" id="password" class="mt-1 p-2 w-full border rounded-md" required  placeholder="Enter Your Password"/>
                </div>
                <button @click="log(username, password)" type="submit" class="w-full bg-stone-900 text-white p-2 rounded-md">Login</button>
                <div class="text-center mt-4">
                <p>To access the login page, please create an account first</p>
                <p @click="register" class="hover:text-yellow-700 cursor-pointer text-red-800"> Click here to register!</p>
                </div>
                <p class="text-red-700 text-center" v-if="errorMsg">Incorrect Credentials</p>
                <p class="text-green-700 text-center" v-if="successMsg">User Logging in.....</p>
            </form>
            </div>
        </div>
       
    </div>
    </template>  
    
    <script setup>
    import { useSSRContext } from 'vue';
  
    const {login}=useNuxtApp()
    const users=usersList()
    const username=ref('')
    const password=ref('')
    const loginStatus=isLoggedIn()
    const errorMsg=ref(false)
    const successMsg=ref(false)
    function log(username,password){
        let a=login(username,password)
        console.log(a)
        if(a){
            loginStatus.value=true
            if(loginStatus){
                setTimeout(gotoLogin,1000)
                errorMsg.value=false
                successMsg.value=true
            }
        }else{
            errorMsg.value=true
        }
        
    }
    function register(){
        navigateTo('/register')
    }
    function gotoLogin(){
        navigateTo('/')
    }
    useHead({
        title:"Login Page"
    })
    definePageMeta({
        middleware:["auth"]
    })
    </script>
    <style>
  
    .bg1{
      background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20210916/pngtree-film-film-black-gold-quality-photosensitive-effect-dark-blue-gradient-background-image_901105.jpg');
      height:100vh;
      background-size:cover;
  
  }</style>