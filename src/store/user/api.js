import { axiosInstancePrivate } from "../auth/api";



export const createChat = async(payload) => {
    const response = await axiosInstancePrivate.post(`/message/prompt/`, payload);
    return response.data;
    
}