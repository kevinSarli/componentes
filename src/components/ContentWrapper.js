import React from 'react';
import ContentrowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TopBar from './TopBar';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <TopBar />
                <ContentrowTop />
                <Table/>
                
            </div>

            <Footer />

        </div>

    )
}

export default ContentWrapper;