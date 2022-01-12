import axios from "axios";

const Api = axios.create({ baseURL: process.env.REACT_BASE_URL });

export default Api;
