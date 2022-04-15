import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import { routerPathUser } from '../../utils/routerpath'
import RegisVM from '../../viewmodel/0-Regis/RegisVM'

function Regis() {

    const viewModel = RegisVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">


                    <div className='row'>
                        <div className='col'>
                        <Link to={routerPathUser.RegisCreate}><Button ><i className="fas fa-plus"></i> ยื่นขอจดทะเบียน</Button></Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Regis