import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import RegisViewVM from '../../viewmodel/0-Regis/RegisViewVM'

function RegisView() {

    const viewModel = RegisViewVM()

    React.useEffect(() => {
        return () => {
            viewModel.queryClient.removeQueries('getProject')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="content-wrapper">

            <ContentHeader
                title={`${viewModel.title} - ${viewModel.query_project_data.isLoading ? "" : viewModel.query_project_data.data?.data.project_name_th}`}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id}/>


                </div>
            </section>
        </div>
    )
}

export default RegisView