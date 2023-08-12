import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Content />
            <Footer />
        </Fragment>
    );
};

export default Home;
