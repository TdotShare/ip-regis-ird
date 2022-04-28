import axios from "axios";
import { API } from "../../config/api";
import { APIFileExpand_data } from "../../model/17-Assessment/FileExpand";
import { APIResponse_data } from "../../model/Response";



const getFileExpand = async (id : number , token : String) => {
    const res = await axios.get<APIFileExpand_data>(`${API}/user/file_expand/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createFileExpand = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/file_expand/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteFileExpand = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/file_expand/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIFileExpand = {
    getFileExpand,
    createFileExpand,
    deleteFileExpand
};

export default exportedAPIFileExpand;