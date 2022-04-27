import axios from "axios";
import { API } from "../../config/api";
import { APIResults_data } from "../../model/12-Results/Results";
import { APIResponse_data } from "../../model/Response";



const getResults = async (id : number , token : String) => {
    const res = await axios.get<APIResults_data>(`${API}/user/results/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createResults = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/results/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteResults = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/results/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIResults = {
    getResults,
    createResults,
    deleteResults
};

export default exportedAPIResults;