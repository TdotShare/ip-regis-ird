import axios from "axios";
import { API } from "../../config/api";
import { APIVideoip_data } from "../../model/18-Workip/Videoip";
import { APIResponse_data } from "../../model/Response";


const getVideoip = async (id : number , token : String) => {
    const res = await axios.get<APIVideoip_data>(`${API}/user/videoip/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createVideoip = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/videoip/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteVideoip = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/videoip/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIVideoip = {
    getVideoip,
    createVideoip,
    deleteVideoip
};

export default exportedAPIVideoip;