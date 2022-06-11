import React , { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIKeyword from '../../utils/api/Keyword'
import exportedAPISearchlist from '../../utils/api/Searchlist'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function KeywordVM() {


    /** 
     * test pass 26-04-2022
     *  - get data
     *  - create data ( keyword , searchlist )
     *  - delete data
     * test pass 02-05-2022
     *  - input data
    */


    const { id }: any = useParams();

    const queryClient = useQueryClient()
    
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


    const submitForm_keyword = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('keyword_use') || !formdata.get('keyword_result')) {
            exportedSwal.actionInfo('กรุณากรอก keyword ที่ใช้ในการสืบค้น และ ผลของการสืบค้นพบ !')
            return
        }

        let data = {
            keyword_project_id : id,
            keyword_use : formdata.get('keyword_use'),
            keyword_result : formdata.get('keyword_result'),
            keyword_web_th : formdata.get('keyword_web_th'),
            keyword_web_epo : formdata.get('keyword_web_epo'),
            keyword_web_us : formdata.get('keyword_web_us'),
            keyword_web_jp : formdata.get('keyword_web_jp'),
            keyword_web_other : formdata.get('keyword_web_other'),
        }

        //console.log(data)

        const res = await exportedAPIKeyword.createKeyword(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
            queryClient.invalidateQueries(keyQueryPath.getCoreip)
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }



    }

    const submitForm_searchlist = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('searchlist_name') || !formdata.get('searchlist_number') || !formdata.get('searchlist_country')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลให้ครบ !')
            return
        }

        let data = {
            searchlist_project_id : id,
            searchlist_name : formdata.get('searchlist_name'),
            searchlist_number : formdata.get('searchlist_number'),
            searchlist_country : formdata.get('searchlist_country'),
        }

        const res = await exportedAPISearchlist.createSearchlist(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
            queryClient.invalidateQueries(keyQueryPath.getCoreip)
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()
    }

    const actionDelete =async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPISearchlist.deleteSearchlist(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
                queryClient.invalidateQueries(keyQueryPath.getCoreip)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }


    return {
        ...values,
        id,
        ref_form,
        submitForm_keyword,
        submitForm_searchlist,
        actionDelete
    }
}