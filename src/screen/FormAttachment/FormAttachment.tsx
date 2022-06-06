import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import Worksip from '../../components/core/18-Worksip/Worksip'
import HeadMenu from '../../components/HeadMenu'
import FormAttachmentVM from '../../viewmodel/FormAttachment/FormAttachmentVM'


export default function FormAttachment() {

    const viewModel = FormAttachmentVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} />

                    <Worksip />
                    
                </div>
            </section>
        </div>
    )
}