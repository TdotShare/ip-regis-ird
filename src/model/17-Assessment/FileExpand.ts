export interface FileExpand {
    file_expand_id          : number;
    file_expand_project_id  : number;
    file_expand_name : string;
    file_expand_file : string;
    expand_create_at  : string;
    expand_update_at  : string;
}


export type APIFileExpand_data = {
    bypass: boolean,
    data: FileExpand[],
    status : string,
    message : string
}