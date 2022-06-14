import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import Worksip from '../../components/core/18-Worksip/Worksip'
import HeadMenu from '../../components/HeadMenu'
import LoadingData from '../../components/LoadingData'
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

                    <HeadMenu
                        token={viewModel.user.token}
                        project_id={viewModel.id} />

                    {
                        viewModel.qe_attachments_data.isLoading ?

                            <LoadingData />

                            :

                            <Worksip
                                data_fileip={viewModel.qe_attachments_data.data?.data.fileip_data!}
                                data_galleryip={viewModel.qe_attachments_data.data?.data.galleryip_data!}
                                data_linkip={viewModel.qe_attachments_data.data?.data.linkip_data!}
                                data_videoip={viewModel.qe_attachments_data.data?.data.videoip_data!}
                            />

                    }

                </div>
            </section>
        </div>
    )
}