import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import FormProjectsVM from '../../viewmodel/FormProjects/FormProjectsVM'


function FormProjects() {

    const viewModel = FormProjectsVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} />

                    ข้อมูลโครงการวิจัย
                    
                </div>
            </section>
        </div>
    )
}

export default FormProjects