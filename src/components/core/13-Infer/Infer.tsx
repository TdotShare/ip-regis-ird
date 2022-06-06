import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import InferVM from '../../../viewmodel/13-Infer/InferVM'

function Infer() {

    const viewModel = InferVM()

    return (
        <>
            {
                viewModel.qe_infer_data.isLoading


                    ?

                    <LoadingData />


                    :

                    <>

                    <form onSubmit={viewModel.submitForm} >


                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">ข้อดีและลักษณะเฉพาะของการประดิษฐ์</h3>
                            </div>
                            <div className="card-body">

                                <b>(โปรดระบุถึงลักษณะเด่นและอธิบายในรายละเอียดของความใหม่ โดยเฉพาะในส่วนที่ได้พัฒนาให้ดีขึ้นกว่าเดิม โดยเน้นให้เห็นถึงความแตกต่างจากเทคโนโลยีเดิม)</b>

                                <div style={{ paddingBottom: `1%` }}></div>

                                <div className="form-group">
                                    <textarea data-testid="infer_strength" className="form-control" name='infer_strength' rows={5} defaultValue={viewModel.qe_infer_data.data?.data?.infer_strength ? viewModel.qe_infer_data.data?.data.infer_strength : ""} />
                                </div>
                            </div>
                        </div>


                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">ที่มา ข้อมูลเบื้องต้น และความสำคัญของปัญหา/ ผลงาน</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} name={`infer_source`} defaultValue={viewModel.qe_infer_data.data?.data?.infer_source ? viewModel.qe_infer_data.data?.data.infer_source : ""} />
                                </div>
                            </div>
                        </div>

                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">สรุปจุดเด่นเทคโนโลยี/ ผลงาน</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} name={`infer_pros`} defaultValue={viewModel.qe_infer_data.data?.data?.infer_pros ? viewModel.qe_infer_data.data?.data.infer_pros : ""} />
                                </div>
                            </div>
                        </div>

                        <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                    </form>

                    <div style={{marginBottom : `1%`}}></div>

                    </>


            }

        </>
    )
}

export default Infer