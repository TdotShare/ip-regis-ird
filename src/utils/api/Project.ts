import axios from "axios";
import { API } from "../../config/api";
import { APICategoryIP_data } from "../../model/2-Project/Category";
import { APIProject_data } from "../../model/2-Project/Project";
import { APIResponse_data } from "../../model/Response";


const getProjectAll = async(token : String) => {
    const res = await axios.get<APIProject_data>(`${API}/user/project` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createProject = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/project/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const deleteProject = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/project/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const getCategory_ip = async (token : String) => {
    const res = await axios.get<APICategoryIP_data>(`${API}/helpers/category` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}





const exportedAPIProject = {
    createProject,
    getProjectAll,
    getCategory_ip,
    deleteProject
};

export default exportedAPIProject;