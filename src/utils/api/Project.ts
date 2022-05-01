import axios from "axios";
import { API } from "../../config/api";
import { APICategoryIP_data } from "../../model/2-Project/Category";
import { APIProject_data } from "../../model/2-Project/Project";
import { APIStatusIP_data } from "../../model/2-Project/Status";
import { APIRegisProject_data } from "../../model/RegisProject";
import { APIResponse_data } from "../../model/Response";


const getProject = async(id : number , token : String) => {
    const res = await axios.get<APIRegisProject_data>(`${API}/user/project/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const getProjectAll = async(number : number ,token : String) => {
    const res = await axios.get<APIProject_data>(`${API}/user/project?page=${number}` , {
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

const updateSendProject = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/project/sendproject`, data , {
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

const getStatus_ip = async (token : String) => {
    const res = await axios.get<APIStatusIP_data>(`${API}/helpers/status` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}





const exportedAPIProject = {
    getProject,
    getProjectAll,
    getCategory_ip,
    getStatus_ip,
    updateSendProject,
    createProject,
    deleteProject
};

export default exportedAPIProject;