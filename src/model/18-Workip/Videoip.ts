export interface Videoip {
    video_id   : number;
    video_project_id: number;
    video_url: string;
    video_create_at: string;
    video_update_at: string;
}


export type APIVideoip_data = {
    bypass: boolean,
    data: Videoip[],
    status: string,
    message: string
}