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

export default function KeywordVM() {


    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การสืบค้นข้อมูลสิทธิบัตร - อนุสิทธิบัตร`, url: "", active: true },
        ]
    })


    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('keyword_use') || !formdata.get('keyword_result')) {
            exportedSwal.actionInfo('กรุณากรอก keyword ที่ใช้ในการสืบค้น และ ผลของการสืบค้นพบว่า !')
            return
        }

        let data = {
            keyword_use : formdata.get('keyword_use'),
            keyword_result : formdata.get('keyword_result'),
            keyword_web_th : formdata.get('keyword_web_th'),
            keyword_web_epo : formdata.get('keyword_web_epo'),
            keyword_web_us : formdata.get('keyword_web_us'),
            keyword_web_jp : formdata.get('keyword_web_jp'),
            keyword_web_other : formdata.get('keyword_web_other'),
        }

        console.log(data)



    }

    const submitForm_searchlist = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

    }

   


    return {
        ...values,
        id,
        ref_form,
        submitForm,
        submitForm_searchlist
    }
}