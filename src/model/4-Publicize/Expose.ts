
export interface Expose {
    expose_id    : number;
    expose_project_id : number;
    expose_date : string;
    expose_agency : string;
    expose_location : string;
    expose_country : string;
    expose_file : string;
    expose_create_at : string;
    expose_update_at : string;
}


export type APIExpose_data = {
    bypass: boolean,
    data:  Expose[],
    status : string,
    message : string
}