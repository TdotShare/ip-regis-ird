import { Expose } from "../4-Publicize/Expose"
import { Present } from "../4-Publicize/Present"
import { Publish } from "../4-Publicize/Publish"
import { Furtherdev } from "../5-Furtherdev/Furtherdev"
import { Keyword } from "../6-Keyword/Keyword"
import { Searchlist } from "../6-Keyword/Searchlist"
import { Movant } from "../7-Movant/Movant"

export type APIFormPublishing_data = {
    bypass: boolean,
    data: {
        expose_data :  Expose[],
        present_data : Present[],
        publish_data :  Publish[],
        furtherdev_data : Furtherdev[],
        keyword_data : Keyword, 
        searchlist_data : Searchlist[],
        movant_data : Movant,
    },
    status : string,
    message : string
}