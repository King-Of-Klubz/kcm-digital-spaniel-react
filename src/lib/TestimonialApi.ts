import axios, {Axios} from "axios";

const testimonialApi: Axios = axios.create({
    baseURL: "https://testimonialapi.vercel.app",
    timeout: 30000,
});

testimonialApi.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
testimonialApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default testimonialApi;
