import axios from "axios";
import { API } from "../../config/api";
import { APIFileip_data } from "../../model/18-Workip/Fileip";
import { APIResponse_data } from "../../model/Response";


const getFileip = async (id : number , token : String) => {
    const res = await axios.get<APIFileip_data>(`${API}/user/fileip/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createFileip = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/fileip/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteFileip = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/fileip/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIFileip = {
    getFileip,
    createFileip,
    deleteFileip
};

export default exportedAPIFileip;