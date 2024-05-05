<script setup lang="ts">
import 'assets/main.scss'
</script>

<template>
  <header>
    <h1>Pratik Bassi</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/resume">Resume</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </nav>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
