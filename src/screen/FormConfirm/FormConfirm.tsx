import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import FormConfirmVM from '../../viewmodel/FormConfirm/FormConfirmVM'


function FormConfirm() {

    const viewModel = FormConfirmVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu
                        token={viewModel.user.token}
                        project_id={viewModel.id} />


                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ส่งคำขอให้เจ้าหน้าที่</h3>
                        </div>
                        <div className="card-body">
                            <p style={{ color: 'red' }}>กรุณากรอกรายละเอียดก่อนกดปุ่ม <b>ส่งคำขอ</b></p>
                            <p>ข้าพเจ้าขอรับรองว่าข้อความดังกล่าวข้างต้นและเอกสารที่แนบมาพร้อมนี้ครบถ้วนและถูกต้องเป็นความจริงทุกประการ
                                หากต้องการข้อมูลเพิ่มเติม</p>
                            <form onSubmit={viewModel.submitFormSendProject}>
                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >หมายเลขโทรศัพท์</label>
                                        <input type="text" className="form-control" name="project_tel" />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >E-mail</label>
                                        <input type="text" className="form-control" name="project_email" />
                                    </div>
                                </div>

                                <Button type='submit' className='btn btn-block btn-primary' >ส่งคำขอ</Button>

                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default FormConfirm