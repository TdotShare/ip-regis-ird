export interface Biological {
    bio_id : number;
    bio_name :string;
    bio_option : Number;
}


export type APIBiological_data = {
    bypass: boolean,
    data: Biological[],
    status : string,
    message : string
}