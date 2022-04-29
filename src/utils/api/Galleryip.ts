import axios from "axios";
import { API } from "../../config/api";
import { APIGalleryip_data } from "../../model/18-Workip/Galleryip";
import { APIResponse_data } from "../../model/Response";


const getGalleryip = async (id : number , token : String) => {
    const res = await axios.get<APIGalleryip_data>(`${API}/user/galleryip/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createGalleryip = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/galleryip/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteGalleryip = async (id : number , token : String) => {
    const res = await axios.delete<APIResponse_data>(`${API}/user/galleryip/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIGalleryip = {
    getGalleryip,
    createGalleryip,
    deleteGalleryip
};

export default exportedAPIGalleryip;