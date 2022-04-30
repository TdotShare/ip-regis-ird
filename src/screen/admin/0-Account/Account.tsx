import React from 'react'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import AccountVM from '../../../viewmodel/admin/0-Account/Account'

function Account() {


    const viewModel = AccountVM()


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

                                            <table className="table table-bordered">
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
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.uid}</td>
                                                                <td>{el.email}</td>
                                                                <td>{`${el.firstname_th} ${el.lastname_th}`}</td>
                                                                <td>{`${el.lastname_th} ${el.lastname_en}`}</td>
                                                                <td>{el.department}</td>
                                                                <td>{el.faculty}</td>
                                                                <td>{el.campus}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>


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