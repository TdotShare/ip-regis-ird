export interface Expand {
    expand_id        : number;
    expand_project_id  : number;
    expand_number_title : number;
    expand_name : string;
    expand_note : string;
    expand_create_at  : string;
    expand_update_at  : string;
}


export type APIExpand_data = {
    bypass: boolean,
    data: Expand[],
    status : string,
    message : string
}