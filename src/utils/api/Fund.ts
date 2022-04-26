import axios from "axios";
import { API } from "../../config/api";
import { APIFund_data } from "../../model/8-Fund/Fund";
import { APIResponse_data } from "../../model/Response";


const getFund = async (id : number , token : String) => {
    const res = await axios.get<APIFund_data>(`${API}/user/fund/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createFund = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/fund/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteFund = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/fund/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIFund = {
    getFund,
    createFund,
    deleteFund
};

export default exportedAPIFund;