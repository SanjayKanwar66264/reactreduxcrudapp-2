import  axios from 'axios';

export const FETCH_APPLICATION_LIST = 'FETCH_APP_LIST';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=66264';

export function fetchAppList() {
    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
    return {
        type: FETCH_APPLICATION_LIST,
        payload: request
    }
}