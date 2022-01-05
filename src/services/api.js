import axios from "axios";

const Api = axios.create({ baseUrl: "http://localhost:3001" });

export default Api;
