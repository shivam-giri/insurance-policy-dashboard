<template>
  <div class="min-h-screen flex flex-col">
    <HeaderNav />
    <main class="container mx-auto px-4 py-6 flex-1">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FooterBar from '../components/FooterBar.vue'
</script>
