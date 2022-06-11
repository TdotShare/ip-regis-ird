import { Fileip } from "../18-Workip/Fileip"
import { Galleryip } from "../18-Workip/Galleryip"
import { Linkip } from "../18-Workip/Linkip"
import { Videoip } from "../18-Workip/Videoip"

export type APIFormAttachments_data = {
    bypass: boolean,
    data: {
        fileip_data :  Fileip[],
        galleryip_data : Galleryip[],
        linkip_data :  Linkip[],
        videoip_data : Videoip[],
    },
    status : string,
    message : string
}