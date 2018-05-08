<template>
  <div>

  </div>
</template>

<script>
import { carsService } from '../services/cars.js'

export default {
  data(){
    return{
      cars:[]
    }
  },

  created(){
    carsService.getAll()
      .then((response) => {
        this.cars = response.data
        console.log(this.cars)
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

