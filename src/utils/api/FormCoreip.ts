import axios from "axios";
import { API } from "../../config/api";
import { APICoreIp_data } from "../../model/CoreIp";
import { APIProcessMenu_data } from "../../model/ProcessMenu";
import { APIResponse_data } from "../../model/Response";


const getProcessMenu = async (id: number, token: String) => {
    const res = await axios.get<APIProcessMenu_data>(`${API}/user/coreip/processmenu/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const getCoreIp = async (id: number, token: String) => {
    const res = await axios.get<APICoreIp_data>(`${API}/user/coreip/getcoreip/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const updateCoreIp = async (data: any, token: String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/coreip/update`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIFormCoreip = {
    getCoreIp,
    updateCoreIp,
    getProcessMenu,
};

export default exportedAPIFormCoreip;