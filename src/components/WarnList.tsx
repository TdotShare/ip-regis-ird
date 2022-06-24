import React from 'react'


type AppProps = {
    title: string,
    item: [],
};



function WarnList({ title, item }: AppProps) {
    return (

        <>
        {
                item.length !== 0 ?

                <div className="alert alert-warning" role="alert">
                    <h5 className="alert-heading">ระบบพบว่าหมวด <b>{title}</b> คุณยังไม่ได้ใส่ข้อมูลในหัวข้อต่อไปนี้</h5>
                    <ul style={{ fontSize: `15px` }}>
                        {
                            item.map((el, index) => (
                                <li key={index}>{el}</li>
                            ))
                        }
                    </ul>
                </div>

                :

                <></>

        }
        </>

    )
}

export default WarnList