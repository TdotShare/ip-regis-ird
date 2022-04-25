import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import InferVM from '../../viewmodel/13-Infer/InferVM'

function Infer() {

    const viewModel = InferVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <MenuTab project_id={viewModel.id} collapsed={true} />

                    <div style={{ paddingBottom: "1%" }}></div>

                    <form  onSubmit={viewModel.submitForm} >


                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">ข้อดีและลักษณะเฉพาะของการประดิษฐ์</h3>
                            </div>
                            <div className="card-body">

                                <b>(โปรดระบุถึงลักษณะเด่นและอธิบายในรายละเอียดของความใหม่ โดยเฉพาะในส่วนที่ได้พัฒนาให้ดีขึ้นกว่าเดิม โดยเน้นให้เห็นถึงความแตกต่างจากเทคโนโลยีเดิม)</b>

                                <div style={{ paddingBottom: `1%` }}></div>

                                <div className="form-group">
                                    <textarea className="form-control" name='infer_strength' rows={5} defaultValue={""} />
                                </div>
                            </div>
                        </div>


                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">ที่มา ข้อมูลเบื้องต้น และความสำคัญของปัญหา/ ผลงาน</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} name={`infer_source`} defaultValue={""} />
                                </div>
                            </div>
                        </div>

                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">สรุปจุดเด่นเทคโนโลยี/ ผลงาน</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} name={`infer_pros`} defaultValue={""} />
                                </div>
                            </div>
                        </div>

                        <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                    </form>

                    <div style={{ paddingBottom: "1%" }}></div>


                </div>
            </section>
        </div>
    )
}

export default Infer