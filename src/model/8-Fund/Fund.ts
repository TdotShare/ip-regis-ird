
export interface Fund {
    fund_id : number;
    fund_project_id: number;
    fund_title: string;
    fund_detail: string;
    fund_file: string;
    fund_create_at: string;
    fund_update_at: string;

}


export type APIFund_data = {
    bypass: boolean,
    data: Fund[],
    status: string,
    message: string
}