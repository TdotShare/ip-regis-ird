interface IObjectKeys {
    [key : string ]: string | number | undefined | null;
  }

export interface SrlTech extends IObjectKeys {  
    tech_srl_id: number;
    tech_srl_project_id: number;
    tech_srl1: number;
    tech_srl2: number;
    tech_srl3: number;
    tech_srl4: number;
    tech_srl5: number;
    tech_srl6: number;
    tech_srl7: number;
    tech_srl8: number;
    tech_srl9: number;
    tech_srl_create_at: string;
    tech_srl_update_at: string;
}


export type APISrlTech_data = {
    bypass: boolean,
    data: SrlTech,
    status: string,
    message: string
}