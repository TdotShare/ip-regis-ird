import axios from "axios";
import { API } from "../../config/api";
import { APIExpose_data } from "../../model/4-Publicize/Expose";
import { APIPresent_data } from "../../model/4-Publicize/Present";
import { APIPublish_data } from "../../model/4-Publicize/Publish";
import { APIResponse_data } from "../../model/Response";



const getPresent =async (id: number , token : String) => {
    const res = await axios.get<APIPresent_data>(`${API}/admin/present/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createPresent = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/present/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return res.data
}


const deletePresent = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/admin/present/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getExpose =async (id: number , token : String) => {
    const res = await axios.get<APIExpose_data>(`${API}/admin/expose/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const createExpose = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/expose/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return res.data
}

const deleteExpose = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/admin/expose/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}



const getPublish =async (id: number , token : String) => {
    const res = await axios.get<APIPublish_data>(`${API}/admin/publish/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const createPublish = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/publish/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return res.data
}

const deletePublish = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/admin/publish/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}







const exportedAPIPublicize = {
    getPresent,
    createPresent,
    deletePresent,
    getExpose,
    createExpose,
    deleteExpose,
    getPublish,
    createPublish,
    deletePublish
};

export default exportedAPIPublicize;