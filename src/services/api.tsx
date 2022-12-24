import axios from "axios";

// consider BASE_URL as env
const BASE_URL = 'https://dummyjson.com'

export const get = async (endpoint: string) => axios.get(`${BASE_URL}/${endpoint}`);