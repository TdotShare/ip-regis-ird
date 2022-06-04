import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import FormPublishingVM from '../../viewmodel/FormPublishing/FormPublishingVM'


function FormPublishing() {

    const viewModel = FormPublishingVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} />

                    ข้อมูลการเผยแพร่
                    
                </div>
            </section>
        </div>
    )
}

export default FormPublishing