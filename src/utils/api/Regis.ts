import axios from "axios";
import { API } from "../../config/api";
import { APIProject_data } from "../../model/2-Project/Project";
import { APIResponse_data } from "../../model/Response";


const getProjectAll = async(number : number , token : String) => {
    const res = await axios.get<APIProject_data>(`${API}/admin/project?page=${number}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const updateStatus = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/project/status_update`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const updateNumberRegis = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/project/numberregis_update`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}





const exportedAPIRegis = {
    getProjectAll,
    updateStatus,
    updateNumberRegis
};

export default exportedAPIRegis;