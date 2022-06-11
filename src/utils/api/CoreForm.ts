import axios from "axios";
import { API } from "../../config/api";
import { APIFormAttachments_data } from "../../model/CoreForms/FormAttachments";
import { APIFormPotentials_data } from "../../model/CoreForms/FormPotentials";
import { APIFormProjects_data } from "../../model/CoreForms/FormProjects";
import { APIFormPublishing_data } from "../../model/CoreForms/FormPublishing";



const getFormPublishing = async (id : number , token : String) => {
    const res = await axios.get<APIFormPublishing_data>(`${API}/user/coreforms/publishing/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getFormProjects = async (id : number , token : String) => {
    const res = await axios.get<APIFormProjects_data>(`${API}/user/coreforms/projects/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getFormPotentials = async (id : number , token : String) => {
    const res = await axios.get<APIFormPotentials_data>(`${API}/user/coreforms/potentials/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getFormAttachments = async (id : number , token : String) => {
    const res = await axios.get<APIFormAttachments_data>(`${API}/user/coreforms/attachments/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPICoreForms = {
    getFormPotentials,
    getFormPublishing,
    getFormProjects,
    getFormAttachments
};

export default exportedAPICoreForms;