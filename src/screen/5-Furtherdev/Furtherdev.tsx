import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import FurtherdevVM from '../../viewmodel/5-Furtherdev/FurtherdevVM'

function Furtherdev() {

    const viewModel = FurtherdevVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <MenuTab project_id={viewModel.id} collapsed={true} />

                    <div style={{ paddingBottom: "1%" }}></div>


                </div>
            </section>
        </div>
    )
}

export default Furtherdev