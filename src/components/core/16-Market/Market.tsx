import React from 'react'
import Button from '../../Button'
import LoadingData from '../../LoadingData'
import MarketVM from '../../../viewmodel/16-market/MarketVM'


type AppProps = {
    chkbox_market: JSX.Element,
    core_market: number,
};


function Market({ chkbox_market, core_market }: AppProps) {

    const viewModel = MarketVM()

    return (


        <div className="card card-outline card-primary">
            <div className="card-header">
                <h3 className="card-title">ข้อมูลทางการตลาด/ธุรกิจ/ อุตสาหกรรม กลุ่มเป้าหมายที่จะเจรจาธุรกิจและถ่ายทอดเทคโนโลยี</h3>
            </div>
            <div className="card-body">

                {chkbox_market}

                {
                    core_market === 0 ?

                        <></>

                        :

                        <>

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm}>

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >บริษัท</label>
                                        <input name='market_company_name' type="text" className="form-control" />
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >ผู้ประสานงาน</label>
                                        <input name='market_coordinator' type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >โทรศัพท์</label>
                                        <input name='market_tel' type="text" className="form-control" />
                                    </div>
                                </div>


                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />
                            {
                                viewModel.qe_market_data.isLoading

                                    ?

                                    <LoadingData />

                                    :
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">บริษัท</th>
                                                    <th scope="col">ผู้ประสานงาน</th>
                                                    <th scope="col">โทรศัพท์</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.qe_market_data.data?.data.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.market_company_name}</td>
                                                            <td>{el.market_coordinator}</td>
                                                            <td>{el.market_tel}</td>
                                                            <td><button onClick={() => viewModel.actionDelete(el.market_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                            }

                        </>
                }



            </div>
        </div>

    )
}

export default Market