export interface Galleryip {
    gallery_id : number;
    gallery_project_id: number;
    gallery_detail: string;
    gallery_file: string;
    gallery_create_at: string;
    gallery_update_at: string;
}


export type APIGalleryip_data = {
    bypass: boolean,
    data: Galleryip[],
    status: string,
    message: string
}