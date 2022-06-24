import axios from "axios";
import { API } from "../../config/api";
import { APIPeople_data } from "../../model/3-People/People";
import { APIResponse_data } from "../../model/Response";

const getProple =async (id: number , token : String) => {
    const res = await axios.get<APIPeople_data>(`${API}/user/people/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const createPeople = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/people/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const updatePeople = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/people/update`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const deletePeople = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/people/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}



const exportedAPIPeople = {
    getProple,
    createPeople,
    deletePeople,
    updatePeople
};

export default exportedAPIPeople;