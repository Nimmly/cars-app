<template>
<div class="form-group">
  <form @submit.prevent="addCar" >
    <label>Brand</label>
    <input v-model="newCar.brand" type='text' placeholder="brand" required minlength="2"/>
    <div>
    <label>Model</label>
    <input v-model="newCar.model" type='text' placeholder="model" required minlength="2"/></div>
    <div>
        <label>Year</label>
    <select v-model="newCar.year" required>
        <option value="0">Select year:</option>
        <option value="1">1990</option>
        <option value="2">1991</option>
        <option value="3">1992</option>
    </select>
    </div>
    <div>
    <label>Max Speed</label>
    <input v-model="newCar.maxSpeed" type="number" placeholder="maxspeed"/></div>
    <div>
    <label>Number of doors</label>
    <input v-model="newCar.numberOfDoors" type="number" placeholder="numberofdoors" required/></div>
     <div>
    <label for="checkbox" class="control-label col-xs-4">Is Automatic</label> 
    <div class="col-xs-8">
      <label class="checkbox-inline">
        <input v-model="newCar.isAutomatic" type="checkbox" name="checkbox" checked="checked" value="yes">
              yes
      </label>
    
    </div>
      </div>
      <label>Engine type</label><br/>
        <input v-model="newCar.engine" type="radio" name="engine" value="diesel"> Diesel<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="petrol"> Petrol<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="electric"> Electric<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="hybrid"> Hybrid<br>

      <button class="btn btn-success" type='submit'>Add car</button>
   
    <input class="btn btn-danger" type="reset" value="Reset">
 

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

    },
}
}
</script>

<style>

</style>

