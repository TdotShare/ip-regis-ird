import axios from "axios";
import { API } from "../../config/api";
import { APIEstimate_data } from "../../model/17-Assessment/Estimate";
import { APIResponse_data } from "../../model/Response";



const getEstimate = async (id : number , token : String) => {
    const res = await axios.get<APIEstimate_data>(`${API}/user/estimate/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createEstimate = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/estimate/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIEstimate = {
    getEstimate,
    createEstimate,
};

export default exportedAPIEstimate;