import { Fragment, useEffect } from 'react';

import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import ScrollToAnchor from '../components/ScrollToAnchor';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Fragment>
            <ScrollToAnchor />
            <Banner />
            <Content />
            <Footer />
        </Fragment>
    );
};

export default Home;
