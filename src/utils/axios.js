import axios from "axios";

// console.log("Load axios...");

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export { axios };
