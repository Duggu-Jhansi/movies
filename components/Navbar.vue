<script setup></script>

<template>
  <div>
    <nav class="bg-current">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <h1 class="moviola bg-pink-950">Moviola</h1>
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              >Home</NuxtLink
            >
            
            <NuxtLink
              to="/contact"
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              >Contact</NuxtLink
            >
          
        
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
 .moviola {
      color: white;
      font-size: 2em; /* Adjust font size as needed */
      font-family: Arial, sans-serif; /* Use appropriate font family */
      font-weight: bold; /* Optionally, adjust font weight */
      text-transform: uppercase; /* Optionally, transform text to uppercase */
    
      text-align:left;

    }</style>