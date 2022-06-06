import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import BudgetVM from '../../../viewmodel/9-Budget/BudgetVM'

function Budget() {

    const viewModel = BudgetVM()

    return (
        <div className="card card-outline card-primary">
            <div className="card-header">
                <h3 className="card-title">งบประมาณในการทำ - ระยะเวลาในการทำ</h3>
            </div>
            <div className="card-body">

                <div style={{ paddingBottom: `1%` }}></div>

                {
                    viewModel.qe_budget_data.isLoading

                        ?

                        <LoadingData />


                        :

                        <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >

                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >งบประมาณในการทำวิจัย/การประดิษฐ์ เป็นจำนวนเงิน ... (ข้อมูลเพื่อใช้ประกอบในการขายสิทธิบัตร/อนุสิทธิบัตรรวมทั้งหมด)</label>
                                    <input type="number" className="form-control" name="budget_price" defaultValue={viewModel.qe_budget_data.data?.data?.budget_price !== null ? viewModel.qe_budget_data.data?.data?.budget_price : ''} />
                                </div>
                            </div>

                            <hr />

                            <b>ระยะเวลาในการทำวิจัย/การประดิษฐ์ ... ปี ... เดือน (ข้อมูลเพื่อใช้ประกอบในการขายสิทธิบัตร/อนุสิทธิบัตรรวมทั้งหมด) </b>

                            <div style={{ paddingBottom: `1%` }}></div>

                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >ปี</label>
                                    <input type="number" className="form-control" name="budget_year" defaultValue={viewModel.qe_budget_data.data?.data?.budget_year !== null ? viewModel.qe_budget_data.data?.data?.budget_year : ''} />
                                </div>
                                <div className="form-group col-md">
                                    <label >เดือน</label>
                                    <input type="number" className="form-control" name="budget_month" defaultValue={viewModel.qe_budget_data.data?.data?.budget_month !== null ? viewModel.qe_budget_data.data?.data?.budget_month : ''} />
                                </div>
                            </div>

                            <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                        </form>


                }


            </div>

        </div>
    )
}

export default Budget