import React from 'react'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import Pagination from '../../../components/Pagination'
import AccountVM from '../../../viewmodel/admin/0-Account/Account'

function Account() {


    const viewModel = AccountVM()

    React.useEffect(() => {
        return () => {
            viewModel.debouncedInputSearch.cancel();
        };
    }, [viewModel.debouncedInputSearch]);


    return (
        <div className="content-wrapper">
            <ContentHeader
                title={`Account Page`}
                breadcrumb={[
                    { name: "Home", url: "", active: true },
                    { name: "Account Page", url: "", active: false },
                ]}
            />
            <section className="content">
                <div className="container-fluid">

                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body'>

                                    {
                                        viewModel.qe_account_data.isLoading ?

                                            <LoadingData />
                                            :

                                            <>

                                                <div style={{ display: 'flex', justifyContent: 'right' }}>

                                                    <div className='row'>
                                                        <div className='col'>
                                                            <input type="text" className="form-control" onChange={viewModel.inputSearch} placeholder='Search...' />
                                                        </div>
                                                    </div>



                                                </div>





                                                <div style={{ marginBottom: `1%` }}></div>

                                                <div className="table-responsive">
                                                    <table className="table table-bordered ">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">uid</th>
                                                                <th scope="col">email</th>
                                                                <th scope="col">fullname_th</th>
                                                                <th scope="col">fullname_en</th>
                                                                <th scope="col">department</th>
                                                                <th scope="col">faculty</th>
                                                                <th scope="col">campus</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                viewModel.qe_account_data.data?.data.data.map((el, index) => (
                                                                    <tr key={index} >
                                                                        <th scope="row">{Number(viewModel.qe_account_data.data?.data.from!) + index}</th>
                                                                        <td>{el.uid}</td>
                                                                        <td>{el.email}</td>
                                                                        <td>{`${el.firstname_th} ${el.lastname_th}`}</td>
                                                                        <td>{`${el.firstname_en} ${el.lastname_en}`}</td>
                                                                        <td>{el.department}</td>
                                                                        <td>{el.faculty}</td>
                                                                        <td>{el.campus}</td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div style={{ marginBottom: `1%` }}></div>

                                                <Pagination
                                                current_page={viewModel.qe_account_data.data?.data.current_page!}
                                                last_page={viewModel.qe_account_data.data?.data.last_page!}
                                                total={viewModel.qe_account_data.data?.data.data.length!}
                                                nextClick={() => viewModel.setPage(viewModel.qe_account_data.data?.data.current_page! + 1)}
                                                previousClick={() => viewModel.setPage(viewModel.qe_account_data.data?.data.current_page! - 1)}
                                                numberClick={(num : number) => viewModel.setPage(num)}

                                                />

                                            </>




                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Account