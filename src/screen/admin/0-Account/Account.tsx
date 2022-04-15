import React from 'react'
import ContentHeader from '../../../components/content-header/ContentHeader'

function Account() {
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
                            Account Page
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Account