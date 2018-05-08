<template>
  <div id="app">
    <NavBar />
    <AppCars />
    <AddCar />
  </div>
</template>

<script>
import AppCars from './components/AppCars.vue'
import NavBar from './components/NavBar.vue'
import AddCar from './components/AddCar.vue'
export default {
  name: 'app',
  components: {
    AppCars,
    NavBar,
    AddCar
  }
}
</script>


