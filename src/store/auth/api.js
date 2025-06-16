import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;


export const axiosInstancePrivate = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
      },
  });



//AUTH APIS
export const loginAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post('/login', credentials);
    return response.data;
    
}

export const signUpAuth = async(credentials) => {
    const response = await axiosInstancePrivate.post(`/signup`, credentials);
    return response.data;
    
}