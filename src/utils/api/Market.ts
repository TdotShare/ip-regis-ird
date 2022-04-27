import axios from "axios";
import { API } from "../../config/api";
import { APIMarket_data } from "../../model/16-Market/Market";
import { APIResponse_data } from "../../model/Response";


const getMarket = async (id : number , token : String) => {
    const res = await axios.get<APIMarket_data>(`${API}/user/market/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createMarket = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/market/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteMarket = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/market/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIMarket = {
    getMarket,
    createMarket,
    deleteMarket
};

export default exportedAPIMarket;