<template>
  <div id="app">
    <NavBar />
    <AppCars />
  </div>
</template>

<script>
import AppCars from './components/AppCars.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    AppCars,
    NavBar
  }
}
</script>


