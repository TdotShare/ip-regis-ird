export interface Linkip {
    link_id  : number;
    link_project_id: number;
    link_working: string;
    link_create_at: string;
    link_update_at: string;
}


export type APILinkip_data = {
    bypass: boolean,
    data: Linkip[],
    status: string,
    message: string
}