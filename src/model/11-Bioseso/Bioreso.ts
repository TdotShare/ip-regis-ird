export interface Bioreso {
    bioreso_id  : number;
    bioreso_project_id  : number;
    bioreso_bio_id : number;
    bioreso_text : number;
    bioreso_other_name : string;
    bioreso_detail  : string;
    bioreso_file  : string;
    bioreso_create_at  : string;
    bioreso_update_at  : string;
}


export type APIBioreso_data = {
    bypass: boolean,
    data: Bioreso[],
    status : string,
    message : string
}