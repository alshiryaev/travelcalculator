import axios from 'axios';
import config from '../config';

export default class AdminService {

    apiUrl = config.apiUrl + "/api/products";

    getAllProducts() {
        return axios.get(this.apiUrl);
    };

    addNewProduct(product) {
        return axios.post(this.apiUrl, product);
    };

    deleteProduct(id) {
        return axios.delete(this.apiUrl, {
            params: {
                id
            }
        });
    };

    editProduct(product){
        return axios.put(this.apiUrl, product);
    }

}