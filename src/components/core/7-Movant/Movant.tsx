import React from 'react'
import Button from '../../Button'
import MovantVM from '../../../viewmodel/7-Movant/MovantVM'
import { Movant as MovantModel } from '../../../model/7-Movant/Movant';


type AppProps = {
    chkbox_movant: JSX.Element,
    core_movant: number,
    data_movant: MovantModel
};

function Movant({ chkbox_movant, core_movant, data_movant }: AppProps) {

    const viewModel = MovantVM()


    return (
        <div className="card card-outline card-primary">
            <div className="card-header">
                <h3 className="card-title">การประดิษฐ์นี้เคยนำไปยื่นขอรับสิทธิบัตรหรืออนุสิทธิบัตรหรือไม่</h3>
            </div>
            <div className="card-body">

                {chkbox_movant}

                {core_movant === 0 ?

                    <></>

                    :

                    <>
                        <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >

                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >เลขที่คำขอ</label>
                                    <input type="text" className="form-control" name="movant_number" defaultValue={data_movant.movant_number !== null ? data_movant.movant_number : ''} />
                                </div>
                                <div className="form-group col-md">
                                    <label >ยื่นคำขอเมื่อวันที่</label>
                                    <input type="text" placeholder='31-12-2539' className="form-control" name="movant_date" defaultValue={data_movant.movant_date !== null ? data_movant.movant_date : ''} />
                                </div>
                                <div className="form-group col-md">
                                    <label >ประเทศที่ยื่น</label>
                                    <input type="text" className="form-control" name="movant_country" defaultValue={data_movant.movant_country !== null ? data_movant.movant_country : ''} />
                                </div>
                            </div>

                            <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                        </form>

                    </>

                }


            </div>

        </div>
    )
}

export default Movant