export interface Publicip {
    public_id      : number;
    public_project_id  : number;
    public_agree_status : number;
    public_agree_text : string;
    public_create_at  : string;
    public_update_at  : string;
}


export type APIPublicip_data = {
    bypass: boolean,
    data: Publicip,
    status : string,
    message : string
}