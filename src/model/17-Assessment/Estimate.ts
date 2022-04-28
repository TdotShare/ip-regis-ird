export interface Estimate {
    estimate_id       : number;
    estimate_project_id  : number;
    estimate_price : number;
    estimate_timeline : number;
    estimate_product : number;
    estimate_sell : number;
    estimate_create_at  : string;
    estimate_update_at  : string;
}


export type APIEstimate_data = {
    bypass: boolean,
    data: Estimate,
    status : string,
    message : string
}