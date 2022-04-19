export interface CategoryIP {
    category_ip_id: number;
    category_ip_name :string;
    category_ip_option : Number;
}


export type APICategoryIP_data = {
    bypass: boolean,
    data: CategoryIP[],
    status : string,
    message : string
}