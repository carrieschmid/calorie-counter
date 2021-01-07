import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://calorie-counter-14ff5-default-rtdb.firebaseio.com/'
});

export default instance;