interface Account {
    id: number;
    uid: string
    card_id : string;
    firstname_th : string;
    lastname_th : string;
    firstname_en : string;
    lastname_en : string;
    department : string;
    faculty : string;
    campus : string
    email : string;
    token : string;
}

export type APIAccount_data = {
    bypass: boolean,
    data: {
        current_page : number
        data : Account[]
        first_page_url : string,
        from : number,
        last_page : number,
        per_page : number,
        to : number,
        total : number
    },
    status : string,
    message : string
}