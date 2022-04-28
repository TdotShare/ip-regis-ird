import axios from "axios";
import { API } from "../../config/api";
import { APIExpand_data } from "../../model/17-Assessment/Expand";
import { APIResponse_data } from "../../model/Response";

const getExpand = async (id : number , token : String) => {
    const res = await axios.get<APIExpand_data>(`${API}/user/expand/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createExpand = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/expand/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteExpand = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/expand/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIExpand = {
    getExpand,
    createExpand,
    deleteExpand
};

export default exportedAPIExpand;