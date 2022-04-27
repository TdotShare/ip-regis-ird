export interface Results {
    results_id   : number;
    results_project_id  : number;
    results_head : string;
    results_text : string;
    results_detail : string;
    results_file  : string;
    results_create_at  : string;
    results_update_at  : string;
}


export type APIResults_data = {
    bypass: boolean,
    data: Results[],
    status : string,
    message : string
}