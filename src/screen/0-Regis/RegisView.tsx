import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import { routerPathUser } from '../../utils/routerpath'
import RegisViewVM from '../../viewmodel/0-Regis/RegisViewVM'

function RegisView() {

    const viewModel = RegisViewVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <MenuTab project_id={viewModel.id} collapsed={false}/>


                </div>
            </section>
        </div>
    )
}

export default RegisView