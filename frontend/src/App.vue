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
  margin: 0 0 20px 0;
  padding: 0;
}
body {
  margin: 0;
}
#app {
  margin: 5px 0 0 20px;
  font-family: "Rockwell Extra Bold", monospace;
}

</style>
