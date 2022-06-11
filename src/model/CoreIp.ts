export interface CoreIp {
    core_id : number;
    core_project_id : number;
    core_expose? : number;
    core_publish? : number;
    core_furtherdev? : number;
    core_movant? : number;
    core_fund? : number;
    core_bioreso? : number;
    core_results? : number;
    core_market? : number;
    core_expand? : number;
    core_create_at  : string;
    core_update_at  : string;
}


export type APICoreIp_data = {
    bypass: boolean,
    data: CoreIp,
    status : string,
    message : string
}