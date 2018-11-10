import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class FoodService {

    apiFoodUrl = process.env.REACT_APP_API_URL + "/api/food";
    apiDayTimeTypesUrl = process.env.REACT_APP_API_URL + "/api/dayTimeTypes";
    apiTravelTypesUrl = process.env.REACT_APP_API_URL + "/api/travelTypes";

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