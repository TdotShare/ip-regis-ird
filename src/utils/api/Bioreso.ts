import axios from "axios";
import { API } from "../../config/api";
import { APIBiological_data } from "../../model/11-Bioseso/Biological";
import { APIBioreso_data } from "../../model/11-Bioseso/Bioreso";
import { APIResponse_data } from "../../model/Response";



const getBiological = async (token : String) => {
    const res = await axios.get<APIBiological_data>(`${API}/helpers/bio` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getBioreso = async (id : number , token : String) => {
    const res = await axios.get<APIBioreso_data>(`${API}/user/bioreso/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createBioreso = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/bioreso/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteBioreso = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/bioreso/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIBioreso = {
    getBiological,
    getBioreso,
    createBioreso,
    deleteBioreso
};

export default exportedAPIBioreso;