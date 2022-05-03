import axios from "axios";
import { API } from "../../config/api";
import { APIAuthentication_data } from "../../model/Authentication";



const getMe = async (token: String) => {
    const res = await axios.get<APIAuthentication_data>(`${API}/user/me` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const login = async (username : string , password : string) => {
    const res = await axios.post<APIAuthentication_data>(`${API}/auth/login` , { "username" : username , "password" : password });
    return res.data
}

const exportedAPIAuthentication = {
    getMe,
    login
};

export default exportedAPIAuthentication;