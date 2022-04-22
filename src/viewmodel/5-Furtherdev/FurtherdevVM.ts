import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIExpose_data } from '../../model/4-Publicize/Expose'
import { APIPresent_data } from '../../model/4-Publicize/Present'
import { APIPublish_data } from '../../model/4-Publicize/Publish'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIPublicize from '../../utils/api/Publicize'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FurtherdevVM() {


    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้มีการพัฒนาต่อยอด`, url: "", active: true },
        ]
    })

   


    return {
        ...values,
        id,
        ref_form,
    }
}