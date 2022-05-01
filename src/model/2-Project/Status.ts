export interface StatusIP {
    status_id : number;
    status_name :string;
}


export type APIStatusIP_data = {
    bypass: boolean,
    data: StatusIP[],
    status : string,
    message : string
}