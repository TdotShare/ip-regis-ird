import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import { Public_path } from '../../../config/public_path'
import BioresoVM from '../../../viewmodel/11-Bioreso/BioresoVM'
import { Bioreso as BioresoModel } from '../../../model/11-Bioseso/Bioreso'


type AppProps = {
    chkbox_bioreso: JSX.Element,
    core_bioreso: number,
    data_bioreso: BioresoModel[]
};

function Bioreso({ chkbox_bioreso, core_bioreso, data_bioreso }: AppProps) {

    const viewModel = BioresoVM()

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    การประดิษฐ์นี้มีการใช้ทรัพยากรชีวภาพดังต่อไปนี้ในการทำการวิจัยหรือไม่
                </div>
                <div className='card-body'>


                    {chkbox_bioreso}

                    {
                        core_bioreso === 0 ?

                            <></>
                            :

                            <>

                                <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm}>

                                    {viewModel.qe_biological_data.isLoading ?


                                        <LoadingData /> :

                                        <div className="form-row">
                                            <div className="form-group col-md-12">

                                                <select className="custom-select" name='bioreso_bio_id' defaultValue={0} onChange={viewModel.actionShowOption} >
                                                    <option value={0} >เลือกทรัพยากรชีวภาพ</option>

                                                    {

                                                        viewModel.qe_biological_data.data?.data.map((el, index) => (
                                                            <option key={index} value={el.bio_id}>{el.bio_name}</option>
                                                        ))


                                                    }

                                                </select>

                                            </div>
                                        </div>

                                    }

                                    {
                                        viewModel.showOptionText === 1


                                            ?

                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label >กรณีเลือก อื่นๆ โปรดระบุ</label>
                                                    <input type="text" className="form-control" name="bioreso_other_name" />
                                                </div>
                                            </div>

                                            :

                                            <></>
                                    }

                                    <hr />

                                    <b>โปรดระบุแหล่งที่มาของทรัพยากรชีวภาพดังกล่าว (ขอให้แนบสำเนาข้อตกลง/สัญญาถ่ายโอนวัสดุชีวภาพ (ถ้ามี))</b>

                                    <div style={{ paddingBottom: "1%" }}></div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >โปรดระบุแหล่งที่มา</label>
                                            <input type="text" className="form-control" name="bioreso_detail" />
                                        </div>
                                    </div>


                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >เอกสารแนบ</label>
                                            <input type="file" className="form-control" name="bioreso_file" accept="application/pdf" />
                                        </div>
                                    </div>

                                    <Button className='btn btn-block btn-success'>บันทึกข้อมูล</Button>

                                </form>

                                <hr />

                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">หัวเรื่อง</th>
                                                <th scope="col">รายละเอียด</th>
                                                <th scope="col">ไฟล์แนบ</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data_bioreso.map((el, index) => (
                                                    <tr key={index} >
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{el.bioreso_text} {el.bioreso_bio_id === 7 ? `(${el.bioreso_other_name})` : ""}</td>
                                                        <td>{el.bioreso_detail}</td>
                                                        <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/fund/${el.bioreso_file}`} >{el.bioreso_file}</a></td>
                                                        <td><button onClick={() => viewModel.actionDelete(el.bioreso_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </>
                    }

                </div>
            </div >


        </>
    )
}

export default Bioreso