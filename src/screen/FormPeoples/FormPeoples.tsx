import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import People from '../../components/core/3-People/People'
import HeadMenu from '../../components/HeadMenu'
import FormPeoplesVM from '../../viewmodel/FormPeoples/FormPeoplesVM'


function FormPeoples() {

    const viewModel = FormPeoplesVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} />

                    <People />
                    
                </div>
            </section>
        </div>
    )
}

export default FormPeoples