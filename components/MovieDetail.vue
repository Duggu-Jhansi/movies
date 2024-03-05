<script setup>
defineProps(["title", "date", "poster", "revenue", "overview", "trailer"]);
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
    <!-- Column 1: Image -->
    <div class="bg-white rounded-lg shadow-2xl overflow-hidden">
      <img
        class="h-400 w-full object-cover"
        :src="`https://image.tmdb.org/t/p/w400/` + poster"
        alt="Placeholder Image"
      />
    </div>

    <!-- Column 2: Title, Overview, revenue, Buy Button -->
    <div class="sm:col-span-2 mx-6 shadow-2xl p-2">
      <h1 class="font-bold text-2xl mb-5">{{ title }}</h1>
      <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
      <p class="text-gray-500 text-md mb-8">
        {{ overview }}
      </p>

      <p class="text-gray-500 text-md">Revenue: $ {{ revenue }}</p>

      <div class="mt-6">
        <NuxtLink
          :to="'https://www.youtube.com/watch?v=f_vbAtFSEc0'"
          target="_blank"
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
        >
          Watch Trailer
        </NuxtLink>
        
      </div>
    </div>
  </div>
</template>
