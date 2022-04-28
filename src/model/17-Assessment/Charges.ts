export interface Charges {
    charges_id      : number;
    charges_project_id  : number;
    charges_newproduct : number;
    charges_substitute : number;
    charges_reduction : number;
    charges_market_in : number;
    charges_market_out : number;
    charges_create_at  : string;
    charges_update_at  : string;
}


export type APICharges_data = {
    bypass: boolean,
    data: Charges,
    status : string,
    message : string
}