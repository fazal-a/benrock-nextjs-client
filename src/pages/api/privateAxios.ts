// import axios from "axios";
// import { redirect } from "next/navigation";
// // export const base_URL = 'http://telemedapi.outsquaremd.com/api'
// const privateAxios = axios.create({
//     baseURL: base_URL,
// });
// privateAxios.interceptors.request.use(async config => {
//     let token = sessionStorage.getItem('token')
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`
//     }

//     return config
// })
// privateAxios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     console.log(error)
//     if (error.response.status == 401) {
//         redirect('/auth/login')
//     }
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });
// // export default privateAxios
