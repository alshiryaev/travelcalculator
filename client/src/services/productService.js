import axios from 'axios';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class productService {
  apiUrl = process.env.REACT_APP_API_URL + '/api/products';

  getAllProducts(filter) {
    return axios.get(this.apiUrl, {
      cancelToken: source.token,
      params: { filter },
    });
  }

  addNewProduct(product) {
    return axios.post(this.apiUrl, product, {
      cancelToken: source.token,
      withCredentials: true,
    });
  }

  deleteProduct(id) {
    return axios.delete(this.apiUrl, {
      cancelToken: source.token,
      params: {
        id,
      },
      withCredentials: true,
    });
  }

  editProduct(product) {
    return axios.put(this.apiUrl, product, {
      cancelToken: source.token,
    });
  }
}
