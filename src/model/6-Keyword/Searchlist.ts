
export interface Searchlist {
    searchlist_id       : number;
    searchlist_project_id : number;
    searchlist_number : string;
    searchlist_name : string;
    searchlist_country : string;
    searchlist_create_at : string;
    searchlist_update_at : string;
    
}


export type APISearchlist_data = {
    bypass: boolean,
    data:  Searchlist[],
    status : string,
    message : string
}