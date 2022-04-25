import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import BudgetVM from '../../viewmodel/9-Budget/BudgetVM'

function Budget() {

    const viewModel = BudgetVM()

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
                            <h3 className="card-title">งบประมาณในการทำ - ระยะเวลาในการทำ</h3>
                        </div>
                        <div className="card-body">

                            <div style={{ paddingBottom: `1%` }}></div>

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >งบประมาณในการทำวิจัย/การประดิษฐ์ เป็นจำนวนเงิน ... (ข้อมูลเพื่อใช้ประกอบในการขายสิทธิบัตร/อนุสิทธิบัตรรวมทั้งหมด)</label>
                                        <input type="text" className="form-control" name="fund_detail" />
                                    </div>
                                </div>

                                <hr />

                                <b>ระยะเวลาในการทำวิจัย/การประดิษฐ์ ... ปี ... เดือน (ข้อมูลเพื่อใช้ประกอบในการขายสิทธิบัตร/อนุสิทธิบัตรรวมทั้งหมด) </b>

                                <div style={{ paddingBottom: `1%` }}></div>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ปี</label>
                                        <input type="number" className="form-control" name="fund_file" />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >เดือน</label>
                                        <input type="number" className="form-control" name="fund_file" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                            </form>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Budget