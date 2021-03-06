export interface Project {
    project_id : number;
    project_regis_num : number;
    project_card_id : string;
    project_name_th : string;
    project_name_en : string;
    project_folder : string;
    project_category_ip_id : number;
    category_ip_name? : string;
    project_category_ip_sub : string;
    project_sd_instead : string;
    project_status : number;
    status_name : string;
    project_create_by : string;
    project_create_at : string;
    project_update_at : string;
}

export type APIProject_data = {
    bypass: boolean,
    data: {
        current_page : number,
        data : Project[],
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