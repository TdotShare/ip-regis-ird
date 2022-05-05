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

const getUserRmuti = async () => {
    const res = await axios.get<APIAuthentication_data>(`${API}/auth/login_get_rmuti`);
    return res.data
}

const login = async () => {
    const res = await axios.get<APIAuthentication_data>(`${API}/auth/login_get_rmuti`);
    return res.data
}

const exportedAPIAuthentication = {
    getUserRmuti,
    getMe,
    login
};

export default exportedAPIAuthentication;