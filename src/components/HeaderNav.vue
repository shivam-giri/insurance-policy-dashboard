<template>
  <header class="bg-white border-b">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src=" " class="h-6 w-6" alt="logo"/>
        <span class="font-semibold">Policy Dashboard</span>
      </div>
      <ul class="flex gap-4 text-sm">
        <li><RouterLink to="/" class="hover:text-blue-600">Home</RouterLink></li>
        <li><RouterLink to="/compare" class="hover:text-blue-600">Compare</RouterLink></li>
        <li><RouterLink to="/calculator" class="hover:text-blue-600">Calculator</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
