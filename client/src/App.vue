<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <h1>Pratik Bassi</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
  </header>

  <main>
      <RouterView />
  </main>
</template>

<style scoped>

</style>
