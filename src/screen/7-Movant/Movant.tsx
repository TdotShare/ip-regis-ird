import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import MovantVM from '../../viewmodel/7-Movant/MovantVM'

function Movant() {

    const viewModel = MovantVM()

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

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">การประดิษฐ์นี้เคยนำไปยื่นขอรับสิทธิบัตรหรืออนุสิทธิบัตรหรือไม่</h3>
                        </div>
                        <div className="card-body">

                            <b>หากเคย (ขอให้ระบบุรายละเอียด) หากไม่เคยไม่ต้องกรอกข้อมูล</b>

                            <div style={{ paddingBottom: "1%" }}></div>

                            {
                                viewModel.qe_movant_data.isLoading

                                ?


                                <LoadingData />

                                :

                                <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >เลขที่คำขอ</label>
                                        <input type="text" className="form-control" name="movant_number" defaultValue={viewModel.qe_movant_data.data?.data?.movant_number !== null ? viewModel.qe_movant_data.data?.data?.movant_number :  ''} />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ยื่นคำขอเมื่อวันที่</label>
                                        <input type="text" className="form-control" name="movant_date" defaultValue={viewModel.qe_movant_data.data?.data?.movant_date !== null ? viewModel.qe_movant_data.data?.data?.movant_date :  ''} />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ประเทศที่ยื่น</label>
                                        <input type="text" className="form-control" name="movant_country" defaultValue={viewModel.qe_movant_data.data?.data?.movant_country !== null ? viewModel.qe_movant_data.data?.data?.movant_country :  ''} />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                            </form>



                            }



                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Movant