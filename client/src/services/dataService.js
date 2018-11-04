import axios from 'axios';
import config from '../config';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class DataService {

    apiUrl = config.apiUrl + "/api/products";

    getAllProducts() {
        return axios.get(this.apiUrl, {
            cancelToken: source.token
        });
    };

    addNewProduct(product) {
        return axios.post(this.apiUrl, product, {
            cancelToken: source.token
        });
    };

    deleteProduct(id) {
        return axios.delete(this.apiUrl, {
            cancelToken: source.token,
            params: {
                id
            }
        });
    };

    editProduct(product){
        return axios.put(this.apiUrl, product, {
            cancelToken: source.token
        });
    }

}