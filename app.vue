<template>
  <div id="app">
    <header class="header">
      <AppHeader />
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>

</template>


<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue';


</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}



</style>