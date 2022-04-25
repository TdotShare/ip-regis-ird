import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function TechLvVM() {


    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const [data_trl] = useState([
        {number : 1 , code : `TRL 1` , name : `หลักการพื้นฐานได้รับการพิจารณาและมีการรายงาน`},
        {number : 2 , code : `TRL 2` , name : `มีการสร้างแนวคิดด้านเทคโนโลยี และ/หรือการประยุกต์ใช้`},
        {number : 3 , code : `TRL 3` , name : `แนวคิดได้ถูกสาธิตด้วยการวิเคราะห์หรือด้วยการทดลอง`},
        {number : 4 , code : `TRL 4` , name : `องค์ประกอบที่สำคัญได้ถูกสาธิตในระดับห้องปฏิบัติการแล้ว`},
        {number : 5 , code : `TRL 5` , name : `องค์ประกอบที่สำคัญได้ถูกสาธิตในสภาวะแวดล้อมที่เกี่ยวข้อง`},
        {number : 6 , code : `TRL 6` , name : `ตัวแทนสิ่งที่จะส่งมอบได้ถูกสาธิตในสภาวะแวดล้อมที่เกี่ยวข้อง`},
        {number : 7 , code : `TRL 7` , name : `ผลของการพัฒนาขั้นสุดท้ายได้ถูกสาธิตในสภาวะทำงานจริง`},
        {number : 8 , code : `TRL 8` , name : `สิ่งที่ส่งมอบจริงได้ผ่านการทดสอบและสาธิต (ใช้งานได้ตามสภาวะทำงานจริง)`},
        {number : 9 , code : `TRL 9` , name : `การใช้งานของสิ่งที่ส่งมอบ (นำไปใช้ประโยชน์จริงแล้ว)`},
    ])

    const [data_srl] = useState([
        {number : 1 , code : `SRL 1` , name : `วิเคราะห์ปัญหาและกำหนดความพร้อมของความรู้และเทคโนโลยีทางด้านสังคม `},
        {number : 2 , code : `SRL 2` , name : `กำหนดปัญหา เสนอแนวคิดในการพัฒนาหรือการแก้ไขปัญหาและคาดการณ์ผลกระทบที่อาจเกิดขึ้น และระบุผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้องในโครงการ`},
        {number : 3 , code : `SRL 3` , name : `ศึกษา วิจัย ทดสอบแนวทางการพัฒนาหรือแก้ปัญหาที่กำหนดขึ้นร่วมกับผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้อง`},
        {number : 4 , code : `SRL 4` , name : `ตรวจสอบแนวทางการแก้ปัญหาในพื้นที่นำร่องเพื่อยืนยันผลกระทบตามที่คาดว่าจะเกิดขึ้น และดูความพร้อมขององค์ความรู้และเทคโนโลยี`},
        {number : 5 , code : `SRL 5` , name : `แนวทางการแก้ปัญหาได้รับการตรวจสอบ ถูกนำเสนอแก่ผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้อง`},
        {number : 6 , code : `SRL 6` , name : `ผลการศึกษานำไปประยุกต์ใช้ในสิ่งแวดล้อมอื่น และดำเนินการกับผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้องเพื่อให้ได้ข้อเสนอแนะเบื้องต้นเพื่อให้เกิดผลกระทบที่เป็นไปได้`},
        {number : 7 , code : `SRL 7` , name : `ปรับปรุงโครงการและ/หรือการแนวทางการพัฒนา การแก้ปัญหา รวมถึงการทดสอบในสภาพแวดล้อมที่เกี่ยวข้องกับผู้มีส่วนได้ส่วนเสีย`},
        {number : 8 , code : `SRL 8` , name : `ปรับปรุงโครงการและ/หรือการแนวทางการพัฒนา การแก้ปัญหา รวมถึงการทดสอบในสภาพแวดล้อมที่เกี่ยวข้องกับผู้มีส่วนได้ส่วนเสีย`},
        {number : 9 , code : `SRL 9` , name : `แนวทางการพัฒนาและการแก้ปัญหาของโครงการได้รับการยอมรับและสามารถนำไป ประยุกต์ใช้ได้กับสิ่งแวดล้อมอื่น ๆ`},
    ])

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ระดับความพร้อม`, url: "", active: true },
        ]
    })

    return {
        ...values,
        id,
        ref_form,
        data_trl,
        data_srl
    }
}