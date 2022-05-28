export interface People {
    people_id  : number;
    people_project_id : number;
    people_title : string;
    people_firstname : string;
    people_lastname : string;
    people_address : string;
    people_tel : string;
    people_email : number;
    people_process : string;
    people_type : string;
    people_head : number;
    people_image : number;
    people_create_at : string;
    people_update_at : string;
}


export type APIPeople_data = {
    bypass: boolean,
    data:  People[],
    status : string,
    message : string
}