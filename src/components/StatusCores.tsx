import React from 'react'

type AppProps = {
    status: number,
    fontSizeIcon: number
    confirm?: boolean
};

export default function StatusCores({ status, fontSizeIcon, confirm }: AppProps) {

    return (
        <div style={{ textAlign: 'center', marginTop: `2%` }}>


            {
                status === 1 ?

                    confirm ?

                        <span style={{ fontSize: fontSizeIcon }} ><i style={{ color: `green` }} className="fas fa-exclamation-circle"></i>  ส่งตรวจสอบได้แล้ว </span>

                        :

                        <span style={{ fontSize: fontSizeIcon }} ><i style={{ color: `green` }} className="far fa-check-circle"></i>  กรอกข้อมูลครบแล้ว </span>

                    :

                    <span style={{ fontSize: fontSizeIcon }} ><i style={{ color: `red` }} className="far fa-times-circle"></i>  ยังกรอกข้อมูลไม่ครบ </span>

            }

        </div>
    )
}