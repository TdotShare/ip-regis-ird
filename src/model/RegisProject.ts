export interface RegisProject {
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
    status_name : string
    project_status : number;
    project_create_by : string;
    project_create_at : string;
    project_update_at : string;
}


export type APIRegisProject_data = {
    bypass: boolean,
    data: RegisProject,
    status : string,
    message : string
}