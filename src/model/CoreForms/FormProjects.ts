import { Bioreso } from "../11-Bioseso/Bioreso"
import { Results } from "../12-Results/Results"
import { Fund } from "../8-Fund/Fund"
import { Budget } from "../9-Budget/Budget"

export type APIFormProjects_data = {
    bypass: boolean,
    data: {
        fund_data :  Fund[],
        budget_data : Budget,
        bioreso_data :  Bioreso[],
        results_data : Results[],
    },
    status : string,
    message : string
}