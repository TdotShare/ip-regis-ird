import axios from "axios";
import { API } from "../../config/api";
import { APIInfer_data } from "../../model/13-Infer/Infer";
import { APIResponse_data } from "../../model/Response";



const getInfer = async (id : number , token : String) => {
    const res = await axios.get<APIInfer_data>(`${API}/user/infer/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createInfer = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/infer/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIInfer = {
    getInfer,
    createInfer,
};

export default exportedAPIInfer;