import axios from "axios";
import { API } from "../../config/api";
import { APISrlTech_data } from "../../model/18-TechLv/Techsrl";
import { APITrlTech_data } from "../../model/18-TechLv/Techtrl";
import { APIResponse_data } from "../../model/Response";



const getTrl = async (id : number , token : String) => {
    const res = await axios.get<APITrlTech_data>(`${API}/user/trl/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getSrl = async (id : number , token : String) => {
    const res = await axios.get<APISrlTech_data>(`${API}/user/srl/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createSrl = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/srl/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createTrl = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/trl/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPITechLv = {
    getTrl,
    getSrl,
    createSrl,
    createTrl
};

export default exportedAPITechLv;