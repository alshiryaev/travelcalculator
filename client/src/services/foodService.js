import axios from 'axios';
import config from '../config';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class FoodService {

    apiFoodUrl = config.apiUrl + "/api/food";
    apiDayTimeTypesUrl = config.apiUrl + "/api/dayTimeTypes";
    apiTravelTypesUrl = config.apiUrl + "/api/travelTypes";

    getDayTimeTypes() {
        return axios.get(this.apiDayTimeTypesUrl, {
            cancelToken: source.token
        });
    };

    getTravelTypes() {
        return axios.get(this.apiTravelTypesUrl, {
            cancelToken: source.token
        });
    };
}