interface Account {
    id: number;
    uid: string;
    card_id : string;
    firstname_th : string;
    lastname_th : string;
    firstname_en : string;
    lastname_en : string;
    department : string;
    faculty : string;
    campus : string;
    email : string;
    token : string;
}

export type APIAuthentication_data = {
    bypass: boolean,
    data: Account,
    status : string,
    message : string
}