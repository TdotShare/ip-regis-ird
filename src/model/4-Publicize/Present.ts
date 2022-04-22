
export interface Present {
    present_id   : number;
    present_project_id : number;
    present_text : string;
    present_create_at : string;
    present_update_at : string;
}


export type APIPresent_data = {
    bypass: boolean,
    data:  Present[],
    status : string,
    message : string
}