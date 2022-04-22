
export interface Publish {
    publish_id    : number;
    publish_project_id : number;
    publish_head : string;
    publish_text : string;
    publish_file : string
    publish_craete_at : string;
    publish_update_at : string;
}


export type APIPublish_data = {
    bypass: boolean,
    data:  Publish[],
    status : string,
    message : string
}