import React from 'react'
import Button from '../../Button'
import { Public_path } from '../../../config/public_path'
import FundVM from '../../../viewmodel/8-Fund/FundVM'
import { Fund as FundModel } from '../../../model/8-Fund/Fund'



type AppProps = {
    chkbox_fund: JSX.Element,
    core_fund: number,
    data_fund: FundModel[]
};

function Fund({ chkbox_fund, core_fund, data_fund }: AppProps) {

    const viewModel = FundVM()

    return (
        <>
            <div className="card card-outline card-primary">
                <div className="card-header">
                    <h3 className="card-title">รายการของสิทธิบัตรหรืออนุสิทธิบัตรที่เกี่ยวข้องที่ได้จากการสืบค้น</h3>
                </div>
                <div className="card-body">

                    {chkbox_fund}


                    {core_fund === 0 ?
                        <></>

                        :

                        <>

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >


                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <select name='fund_title' className="custom-select" defaultValue={""} >
                                            <option value={""}>เลือกประเภทการได้รับทุน</option>
                                            <option value={0}>ทุนอุดหนุนงบประมาณแผ่นดิน (กรอก รายละเอียดและปีงบประมาณ) </option>
                                            <option value={1}>ทุนอุดหนุนเงินราย (กรอก รายละเอียดและคณะ ปีงบประมาณ)</option>
                                            <option value={2}>ทุนหน่วยงานภายนอก (ระบุชื่อแหล่งทุน ปีที่ได้ พร้อมแนบสำเนาสัญญารับทุน)</option>
                                            <option value={3}>อื่น ๆ (กรุณาระบุ เช่น สัญญาจ้างวิจัย สัญญาร่วมวิจัย เป็นต้น พร้อมแนบสำเนาสัญญารับทุน)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >รายละเอียด</label>
                                        <input type="text" className="form-control" name="fund_detail" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >แนบไฟล์เอกสาร (pdf)</label>
                                        <input type="file" className="form-control" name="fund_file" accept="application/pdf" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">หัวเรื่อง</th>
                                            <th scope="col">รายละเอียด</th>
                                            <th scope="col">เอกสารแนบ</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data_fund.map((el, index) => (
                                                <tr key={index} >
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{el.fund_title}</td>
                                                    <td>{el.fund_detail}</td>
                                                    <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/fund/${el.fund_file}`} >{el.fund_file}</a></td>
                                                    <td><button onClick={() => viewModel.actionDelete(el.fund_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>


                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Fund