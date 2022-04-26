import axios from "axios";
import { API } from "../../config/api";
import { APIMovant_data } from "../../model/7-Movant/Movant";
import { APIResponse_data } from "../../model/Response";



const getMovant = async (id : number , token : String) => {
    const res = await axios.get<APIMovant_data>(`${API}/user/movant/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createMovant = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/movant/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIMovant = {
    getMovant,
    createMovant,
};

export default exportedAPIMovant;