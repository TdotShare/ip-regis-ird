export interface Fileip {
    fileip_id: number;
    fileip_project_id: number;
    fileip_detail: string;
    fileip_file: string;
    fileip_create_at: string;
    fileip_update_at: string;
}


export type APIFileip_data = {
    bypass: boolean,
    data: Fileip[],
    status: string,
    message: string
}