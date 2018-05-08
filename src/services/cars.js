import Axios from "axios";

export default class CarsService{
    constructor(){
        Axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll(){
        return Axios.get('cars')
    }
    add(newCar){
        return Axios.post('cars', newCar)
    }
}

export const carsService = new CarsService()