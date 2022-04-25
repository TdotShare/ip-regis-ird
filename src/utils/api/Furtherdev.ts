import axios from "axios";
import { API } from "../../config/api";
import { APIFurtherdev_data } from "../../model/5-Furtherdev/Furtherdev";
import { APIResponse_data } from "../../model/Response";

const getFurtherdev =async (id: number , token : String) => {
    const res = await axios.get<APIFurtherdev_data>(`${API}/user/furtherdev/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const createFurtherdev = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/furtherdev/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteFurtherdev = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/furtherdev/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}



const exportedAPIPeople = {
    getFurtherdev,
    createFurtherdev,
    deleteFurtherdev
};

export default exportedAPIPeople;