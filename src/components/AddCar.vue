<template>
<div>
  <form @submit.prevent="addCar" >
    <label>Brand</label>
    <input v-model="newCar.brand" type='text' placeholder="brand"/>
    <label>Model</label>
    <input v-model="newCar.model" type='text' placeholder="model"/>
    <label>Year</label>
    <select v-model="newCar.year">
        <option value="0">Select year:</option>
        <option value="1">1990</option>
        <option value="2">1991</option>
        <option value="3">1992</option>
    </select>
    <label>Max Speed</label>
    <input v-model="newCar.maxSpeed" type="number" placeholder="maxspeed"/>
    <label>Number of doors</label>
    <input v-model="newCar.numberOfDoors" type="number" placeholder="numberofdoors"/>
     
    <label for="checkbox" class="control-label col-xs-4">Is Automatic</label> 
    <div class="col-xs-8">
      <label class="checkbox-inline">
        <input v-model="newCar.isAutomatic" type="checkbox" name="checkbox" checked="checked" value="yes">
              yes
      </label>
      <label class="checkbox-inline">
        <input v-model="newCar.isAutomatic" type="checkbox" name="checkbox" value="no">
              no
      </label>
      </div>
      <label>Engine type</label><br/>
        <input v-model="newCar.engine" type="radio" name="engine" value="diesel"> Diesel<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="petrol"> Petrol<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="electric"> Electric<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="hybrid"> Hybrid

      <button class="btn btn-success" type='submit'>Add car</button>
    </form>
</div>

</template>

<script>
import { carsService } from '../services/cars.js'
export default {
    data(){
        return{
            newCar:{
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                numberOfDoors: '',
                isAutomatic: '',
                engine: ''
            }
        }
    },
    methods:{
    addCar(newCar){
        carsService.add(this.newCar)

    }
}
}
</script>

<style>

</style>

