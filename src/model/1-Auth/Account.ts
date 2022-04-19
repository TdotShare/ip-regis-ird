interface Auth {
    id: number;
    uid: string
    card_id : string;
    firstname_th : string;
    lastname_th : string;
    email : string;
    token : string;
}

export type APIAuth_data = {
    bypass: boolean,
    data: Auth,
    status : string,
    message : string
}