import axios from "axios";
import { API } from "../../config/api";
import { APIBiological_data } from "../../model/11-Bioseso/Biological";



const getBiological = async (token : String) => {
    const res = await axios.get<APIBiological_data>(`${API}/helpers/bio` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIBioreso = {
    getBiological,
};

export default exportedAPIBioreso;