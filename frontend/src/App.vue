<template>
  <div id="app">
    <header>
      <h1>Pratik Bassi</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h1 {
  display: flex;
  flex-direction: row;
  font-size: 60px;
  margin: 0;
  padding: 0.5em;
  text-align: left;
  background-color: unset;
  border-bottom: unset;
}

</style>
