import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import AssessmentVM from '../../../viewmodel/17-Assessment/AssessmentVM'



type AppProps = {
    chkbox_expand: JSX.Element,
    core_expand: number,
};


function Assessment({
    chkbox_expand,
    core_expand
}: AppProps) {

    const viewModel = AssessmentVM()

    return (
        <>

            <div className="card card-outline card-primary">
                <div className="card-header">
                    <h3 className="card-title">ท่านต้องการนำผลงานไปขยายผลสู่เชิงพาณิชย์/ ถ่ายทอดเทคโนโลยีหรือไม่</h3>
                </div>
                <div className="card-body">

                    <div style={{ paddingBottom: `1%` }}></div>

                    <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm_expand} >



                        <div className="form-row">
                            <div className="form-group col-md">
                                <select name='expand_number_title' className="custom-select" onChange={viewModel.actionShowOption} defaultValue={""} >
                                    <option value={""}>เลือกประเภทการได้รับทุน</option>
                                    <option value={1}>ต้องการถ่ายทอดเทคโนโลยี </option>
                                    <option value={2}>ต้องการขยายผลสู่เชิงพาณิชย์ </option>
                                    <option value={3}>ไม่ต้องการ</option>
                                    <option value={4}>ต้องการแต่ยังไม่พร้อม</option>
                                </select>
                            </div>
                        </div>

                        {
                            [3, 4].includes(viewModel.showOptionText) ?


                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >โปรดระบุสาเหตุ</label>
                                        <input name='expand_note' type="text" className="form-control" />
                                    </div>
                                </div>

                                :

                                <></>
                        }


                        <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                    </form>


                    <hr />

                    {
                        viewModel.qe_expand_data.isLoading

                            ?

                            <LoadingData />

                            :
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">หัวเรื่อง</th>
                                            <th scope="col">สาเหตุ / รายละเอียด</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            viewModel.qe_expand_data.data?.data.map((el, index) => (
                                                <tr key={index} >
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{el.expand_name}</td>
                                                    <td>{el.expand_note}</td>
                                                    <td><button onClick={() => viewModel.actionDelete_expand(el.expand_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }




                </div>

            </div>

            <div className="card card-outline card-primary">
                <div className="card-header">
                    <h3 className="card-title">กรณีต้องการขยายผลสู่เชิงพาณิชย์/ ถ่ายทอดเทคโนโลยีมีแผนการตลาด (โปรดแนบไฟล์)</h3>
                </div>
                <div className="card-body">

                    {chkbox_expand}

                    {core_expand === 0 ?

                        <></>

                        :

                        <>

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm_uploadfile_expand}>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ชื่อเอกสาร</label>
                                        <input name='file_expand_name' type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ไฟล์แนบ</label>
                                        <input name='file_expand_file' type="file" className="form-control" accept="application/pdf" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            {
                                viewModel.qe_file_expand_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">ชื่อเอกสาร</th>
                                                <th scope="col">เอกสารแนบ</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                viewModel.qe_file_expand_data.data?.data.map((el, index) => (
                                                    <tr key={index} >
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{el.file_expand_name}</td>
                                                        <td>{el.file_expand_file}</td>
                                                        <td><button onClick={() => viewModel.actionDelete_file_expand(el.file_expand_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }

                        </>

                    }






                </div>

            </div>


            <div className="card card-outline card-primary">
                <div className="card-header">
                    <h3 className="card-title">การประเมินต้นทุนเบื้องต้น</h3>
                </div>
                <div className="card-body">

                    <div style={{ paddingBottom: `1%` }}></div>


                    {
                        viewModel.qe_estimate_data.isLoading ?

                            <LoadingData />

                            :

                            <form onSubmit={viewModel.submitForm_estimate}>
                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ต้นทุนในการวิจัย</label>
                                        <select name='estimate_price'
                                            defaultValue={viewModel.qe_estimate_data.data?.data?.estimate_price !== null ? viewModel.qe_estimate_data.data?.data?.estimate_price : ""}
                                            className="custom-select" >
                                            <option value={""}>เลือกต้นทุนในการวิจัย</option>
                                            <option value={1}>ต่ำกว่า 50,000</option>
                                            <option value={2}>50,000 - 100,000 </option>
                                            <option value={3}>100,001 - 500,000</option>
                                            <option value={4}>500,001 - 1,000,000</option>
                                            <option value={5}>มากกว่า 1,000,000 ขึ้นไป</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ระยะเวลาในการวิจัย</label>
                                        <select name='estimate_timeline'
                                            defaultValue={viewModel.qe_estimate_data.data?.data?.estimate_timeline !== null ? viewModel.qe_estimate_data.data?.data?.estimate_timeline : ""}
                                            className="custom-select"  >
                                            <option value={""}>เลือกระยะเวลาในการวิจัย</option>
                                            <option value={1}>ต่ำกว่า 1 ปี </option>
                                            <option value={2}>1 - 5 ปี </option>
                                            <option value={3}>5 - 10 ปี</option>
                                            <option value={4}>10 ปีขึ้นไป</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ต้นทุนผลิตภัณฑ์/ ต้นทุนการผลิตชิ้นงาน/ต่อชิ้น (ไม่รวมค่าแรงและค่าบรรจุภัณฑ์)</label>
                                        <input name='estimate_product' type="number" className="form-control" placeholder='กรอกราคา' defaultValue={viewModel.qe_estimate_data.data?.data?.estimate_product !== null ? viewModel.qe_estimate_data.data?.data?.estimate_product : ""} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ราคาขายในท้องตลาด</label>
                                        <input name='estimate_sell' type="number" className="form-control" placeholder='กรอกราคา' defaultValue={viewModel.qe_estimate_data.data?.data?.estimate_sell !== null ? viewModel.qe_estimate_data.data?.data?.estimate_sell : ""} />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                            </form>


                    }



                </div>

            </div>

            <div className="card card-outline card-primary">
                <div className="card-header">
                    <h3 className="card-title">ด้านการตลาด</h3>
                </div>
                <div className="card-body">

                    <div style={{ paddingBottom: `1%` }}></div>

                    {
                        viewModel.qe_charges_data.isLoading ?

                            <LoadingData />

                            :

                            <form onSubmit={viewModel.submitForm_charges}>

                                <table className="table table-bordered" width={`100%`}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">มูลค่าทางการตลาด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input position-static" name='charges_newproduct' defaultChecked={viewModel.qe_charges_data.data?.data?.charges_newproduct === 1 ? true : false} type="checkbox" value={'1'} />
                                                </div>
                                            </th>
                                            <td>ผลิตภัณฑ์ใหม่</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input position-static" name='charges_substitute' defaultChecked={viewModel.qe_charges_data.data?.data?.charges_substitute === 1 ? true : false} type="checkbox" value={'1'} />
                                                </div>
                                            </th>
                                            <td>ทดแทนการนำเข้า</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input position-static" name='charges_reduction' defaultChecked={viewModel.qe_charges_data.data?.data?.charges_reduction === 1 ? true : false} type="checkbox" value={'1'} />
                                                </div>
                                            </th>
                                            <td>เป็นการลดต้นทุนการผลิต</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">

                                            </th>
                                            <td><b>แหล่งจำหน่ายสินค้า</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input position-static" name='charges_market_in' defaultChecked={viewModel.qe_charges_data.data?.data?.charges_market_in === 1 ? true : false} type="checkbox" value={'1'} />
                                                </div>
                                            </th>
                                            <td>ตลาดภายในประเทศ</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input position-static" name='charges_market_out' defaultChecked={viewModel.qe_charges_data.data?.data?.charges_market_out === 1 ? true : false} type="checkbox" value={'1'} />
                                                </div>
                                            </th>
                                            <td>ตลาดภายนอกประเทศ</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div style={{ paddingBottom: `1%` }}></div>

                                <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                            </form>

                    }





                </div>

            </div>

        </>

    )
}

export default Assessment