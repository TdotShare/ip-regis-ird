import { Market } from "../16-Market/Market"
import { Charges } from "../17-Assessment/Charges"
import { Estimate } from "../17-Assessment/Estimate"
import { Expand } from "../17-Assessment/Expand"
import { FileExpand } from "../17-Assessment/FileExpand"
import { SrlTech } from "../19-TechLv/Techsrl"
import { TrlTech } from "../19-TechLv/Techtrl"

export type APIFormPotentials_data = {
    bypass: boolean,
    data: {
        market_data :  Market[],
        expand_data : Expand,
        expandfile_data :  FileExpand[],
        estimate_data : Estimate,
        charges_data : Charges,
        techsrl_data : SrlTech,
        techtrl_data : TrlTech,
    },
    status : string,
    message : string
}