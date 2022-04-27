export interface Market {
    market_id     : number;
    market_project_id  : number;
    market_company_name : string;
    market_coordinator : string;
    market_tel : string;
    market_create_at  : string;
    market_update_at  : string;
}


export type APIMarket_data = {
    bypass: boolean,
    data: Market[],
    status : string,
    message : string
}