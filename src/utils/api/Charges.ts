import axios from "axios";
import { API } from "../../config/api";
import { APICharges_data } from "../../model/17-Assessment/Charges";
import { APIResponse_data } from "../../model/Response";



const getCharges = async (id : number , token : String) => {
    const res = await axios.get<APICharges_data>(`${API}/user/charges/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createCharges = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/charges/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPICharges = {
    getCharges,
    createCharges,
};

export default exportedAPICharges;