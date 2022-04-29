interface IObjectKeys {
    [key : string ]: string | number | undefined | null;
  }

export interface TrlTech extends IObjectKeys {
    tech_trl_id: number;
    tech_trl_project_id: number;
    tech_trl1: number;
    tech_trl2: number;
    tech_trl3: number;
    tech_trl4: number;
    tech_trl5: number;
    tech_trl6: number;
    tech_trl7: number;
    tech_trl8: number;
    tech_trl9: number;
    tech_trl_create_at: string;
    tech_trl_update_at: string;
}


export type APITrlTech_data = {
    bypass: boolean,
    data: TrlTech,
    status: string,
    message: string
}