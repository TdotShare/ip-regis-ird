export interface Infer {
    infer_id    : number;
    infer_project_id  : number;
    infer_strength : string;
    infer_source : string;
    infer_pros : string;
    infer_create_at  : string;
    infer_update_at  : string;
}


export type APIInfer_data = {
    bypass: boolean,
    data: Infer,
    status : string,
    message : string
}