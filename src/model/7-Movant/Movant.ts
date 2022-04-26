
export interface Movant {
    movant_id: number;
    movant_project_id: number;
    movant_number: number;
    movant_date: number;
    movant_country: number;
    movant_create_at: string;
    movant_update_at: string;

}


export type APIMovant_data = {
    bypass: boolean,
    data: Movant,
    status: string,
    message: string
}