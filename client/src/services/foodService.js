import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class FoodService {

    apiFoodUrl = process.env.REACT_APP_API_URL + "/api/foods";
    apiDayTimeTypesUrl = process.env.REACT_APP_API_URL + "/api/dayTimeTypes";
    apiTravelTypesUrl = process.env.REACT_APP_API_URL + "/api/travelTypes";
    recipesUrl = process.env.REACT_APP_API_URL + "/api/recipes";

    getDayTimeTypes = () => axios.get(this.apiDayTimeTypesUrl, {
        cancelToken: source.token
    });

    getTravelTypes = () => axios.get(this.apiTravelTypesUrl, {
        cancelToken: source.token
    });

    getFoods = () => axios.get(this.apiFoodUrl, {
        cancelToken: source.token
    });

    addFood = (newFood) => axios.post(this.apiFoodUrl, newFood, {
        cancelToken: source.token
    });

    getRecipes = () => axios.get(this.recipesUrl, {
        cancelToken: source.token
    });
}