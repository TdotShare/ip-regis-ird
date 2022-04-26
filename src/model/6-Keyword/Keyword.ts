
export interface Keyword {
    keyword_id      : number;
    keyword_project_id : number;
    keyword_use : string;
    keyword_result : number;
    keyword_web_th : number;
    keyword_web_epo : number;
    keyword_web_us : number;
    keyword_web_jp : number;
    keyword_web_other : number;
    keyword_create_at : string;
    keyword_update_at : string;
    
}


export type APIKeyword_data = {
    bypass: boolean,
    data:  Keyword,
    status : string,
    message : string
}