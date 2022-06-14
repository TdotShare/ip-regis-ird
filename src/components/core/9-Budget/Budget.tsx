import React from 'react'
import Button from '../../Button'
import BudgetVM from '../../../viewmodel/9-Budget/BudgetVM'
import { Budget as BudgetModel } from '../../../model/9-Budget/Budget';

type AppProps = {
    data_budget: BudgetModel
};

function Budget({data_budget} : AppProps) {

    const viewModel = BudgetVM()


    return (
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
                            <input type="number" className="form-control" name="budget_price" defaultValue={data_budget !== null ? data_budget.budget_price : ''} />
                        </div>
                    </div>

                    <hr />

                    <b>ระยะเวลาในการทำวิจัย/การประดิษฐ์ ... ปี ... เดือน (ข้อมูลเพื่อใช้ประกอบในการขายสิทธิบัตร/อนุสิทธิบัตรรวมทั้งหมด) </b>

                    <div style={{ paddingBottom: `1%` }}></div>

                    <div className="form-row">
                        <div className="form-group col-md">
                            <label >ปี</label>
                            <input type="number" className="form-control" name="budget_year" defaultValue={data_budget !== null ? data_budget.budget_year : ''} />
                        </div>
                        <div className="form-group col-md">
                            <label >เดือน</label>
                            <input type="number" className="form-control" name="budget_month" defaultValue={data_budget !== null ? data_budget.budget_month : ''} />
                        </div>
                    </div>

                    <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                </form>

            </div>

        </div>
    )
}

export default Budget