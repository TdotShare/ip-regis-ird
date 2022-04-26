import axios from "axios";
import { API } from "../../config/api";
import { APISearchlist_data } from "../../model/6-Keyword/Searchlist";
import { APIResponse_data } from "../../model/Response";



const getSearchlist = async (id : number , token : String) => {
    const res = await axios.get<APISearchlist_data>(`${API}/user/searchlist/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createSearchlist = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/searchlist/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteSearchlist = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/searchlist/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPISearchlist = {
    getSearchlist,
    createSearchlist,
    deleteSearchlist
};

export default exportedAPISearchlist;