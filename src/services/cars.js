import Axios from "axios";

export default class CarsService{
    getAll(){
        return Axios.get('http://localhost:3000/api/cars')
    }
}

export const carsService = new CarsService()