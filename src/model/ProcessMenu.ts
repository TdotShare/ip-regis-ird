export interface ProcessMenu {
    peoples : number;
    publishing : number;
    projects : number;
    details : number;
    potentials : number;
    attachments : number;
    confirm : number;
}


export type APIProcessMenu_data = {
    bypass: boolean,
    data: ProcessMenu,
    status : string,
    message : string
}