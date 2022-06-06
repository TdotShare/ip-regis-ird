import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import MovantVM from '../../../viewmodel/7-Movant/MovantVM'


type AppProps = {
    chkbox_movant: JSX.Element,
    core_movant: number,
};

function Movant({ chkbox_movant, core_movant }: AppProps) {

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

                        {viewModel.qe_movant_data.isLoading

                            ?


                            <LoadingData />

                            :

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >เลขที่คำขอ</label>
                                        <input type="text" className="form-control" name="movant_number" defaultValue={viewModel.qe_movant_data.data?.data?.movant_number !== null ? viewModel.qe_movant_data.data?.data?.movant_number : ''} />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ยื่นคำขอเมื่อวันที่</label>
                                        <input type="text" placeholder='31-12-2539' className="form-control" name="movant_date" defaultValue={viewModel.qe_movant_data.data?.data?.movant_date !== null ? viewModel.qe_movant_data.data?.data?.movant_date : ''} />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ประเทศที่ยื่น</label>
                                        <input type="text" className="form-control" name="movant_country" defaultValue={viewModel.qe_movant_data.data?.data?.movant_country !== null ? viewModel.qe_movant_data.data?.data?.movant_country : ''} />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                            </form>
                        }
                    </>

                }


            </div>

        </div>
    )
}

export default Movant