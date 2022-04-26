import axios from "axios";
import { API } from "../../config/api";
import { APIKeyword_data } from "../../model/6-Keyword/Keyword";
import { APIResponse_data } from "../../model/Response";



const getKeyword = async (id : number , token : String) => {
    const res = await axios.get<APIKeyword_data>(`${API}/user/keyword/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createKeyword = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/keyword/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIKeyword = {
    getKeyword,
    createKeyword
};

export default exportedAPIKeyword;