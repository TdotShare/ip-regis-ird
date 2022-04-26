
export interface Budget {
    budget_id  : number;
    budget_project_id: number;
    budget_price: string;
    budget_year: number;
    budget_month: number;
    budget_create_at: string;
    budget_update_at: string;

}


export type APIBudget_data = {
    bypass: boolean,
    data: Budget,
    status: string,
    message: string
}