
export interface Furtherdev {
    furtherdev_id     : number;
    furtherdev_project_id : number;
    furtherdev_title : string;
    furtherdev_text : string;
    furtherdev_create_at : string;
    furtherdev_update_at : string;
}


export type APIFurtherdev_data = {
    bypass: boolean,
    data:  Furtherdev[],
    status : string,
    message : string
}