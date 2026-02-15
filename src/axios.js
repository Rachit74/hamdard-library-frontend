import axios from "axios";


const api = axios.create({
    baseURL: "https://hamdardlibrary.onrender.com/api",
});

// api.interceptors.request.use((config) => {
//     // config is the request about to be sent (url, headers, body, etc.)
    
//     const token = localStorage.getItem('token'); // read the token from localStorage
//     // ******PRINTING TOKEN JUST FOR DEBUG******
//     console.log(token);
    
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//         // attach it to the request header
//     }
    
//     return config; // send the request with the modified headers
// });

export default api;