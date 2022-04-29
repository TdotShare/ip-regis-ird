import axios from "axios";
import { API } from "../../config/api";
import { APILinkip_data } from "../../model/18-Workip/Linkip";
import { APIResponse_data } from "../../model/Response";


const getLinkip = async (id : number , token : String) => {
    const res = await axios.get<APILinkip_data>(`${API}/user/linkip/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createLinkip = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/linkip/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteLinkip = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/linkip/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPILinkip = {
    getLinkip,
    createLinkip,
    deleteLinkip
};

export default exportedAPILinkip;