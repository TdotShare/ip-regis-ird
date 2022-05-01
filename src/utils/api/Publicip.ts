import axios from "axios";
import { API } from "../../config/api";
import { APIPublicip_data } from "../../model/20-Publicip/Publicip";
import { APIResponse_data } from "../../model/Response";



const getPublicip = async (id : number , token : String) => {
    const res = await axios.get<APIPublicip_data>(`${API}/user/publicip/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createPublicip = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/publicip/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPIPublicip = {
    getPublicip,
    createPublicip,
};

export default exportedAPIPublicip;