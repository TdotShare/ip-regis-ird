import React from 'react'
import Button from '../../Button'
import FurtherdevVM from '../../../viewmodel/5-Furtherdev/FurtherdevVM'
import { Furtherdev as FurtherdevModel } from '../../../model/5-Furtherdev/Furtherdev'


type AppProps = {
    chkbox_furtherdev: JSX.Element,
    core_furtherdev: number,
    data_furtherdev: FurtherdevModel[]
};


function Furtherdev({ chkbox_furtherdev, core_furtherdev, data_furtherdev }: AppProps) {

    const viewModel = FurtherdevVM()

    return (
        <>
            <div className='row'>
                <div className='col'>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">การประดิษฐ์นี้มีการพัฒนาต่อยอดหรือเพิ่มเติมมาจากการประดิษฐ์หรืองานวิจัยอื่นหรือไม่</h3>
                        </div>
                        <div className="card-body">

                            {chkbox_furtherdev}


                            {core_furtherdev === 0 ?

                                <></>

                                :

                                <>

                                    <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm}>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <select name='furtherdev_title' className="custom-select" defaultValue={""} >
                                                    <option value={""}>ระบุแหล่งที่มา</option>
                                                    <option value={"จากสิทธิบัตร/อนุสิทธิบัตร เลขที่"}>จากสิทธิบัตร/อนุสิทธิบัตร เลขที่</option>
                                                    <option value={"จากการประดิษฐ์/งานวิจัย"}>จากการประดิษฐ์/งานวิจัย</option>
                                                    <option value={"อื่น ๆ"}>อื่น ๆ</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >รายละเอียด</label>
                                                <input type="text" className="form-control" name="furtherdev_text" />
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
                                                    <th scope="col">หัวข้อ</th>
                                                    <th scope="col">รายละเอียด</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data_furtherdev.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.furtherdev_title}</td>
                                                            <td>{el.furtherdev_text}</td>
                                                            <td><button onClick={() => viewModel.actionDelete(el.furtherdev_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
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

                </div>
            </div>
        </>
    )
}

export default Furtherdev