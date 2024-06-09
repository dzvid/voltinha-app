<template>
  <v-app class="bg-primary-lighten-1">
    <!-- <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Voltinha.app</v-app-bar-title>
    </v-app-bar> -->

    <v-main class="bg-secondary pa-4 mx-auto ">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
main {
  width: 50rem;
}
</style>