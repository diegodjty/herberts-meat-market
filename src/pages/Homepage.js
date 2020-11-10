import React from 'react';
import homepage from '../data/homepage.json'
import {Banner,HomepageContent,HomepageSpecial} from '../components/Homepage';
import MetaData from '../components/MetaData'
const Homepage = () => {
    return (
        <div>
            <MetaData title={`Herberts - ${homepage.title}`} description={homepage.description} />
            <Banner />
            <HomepageContent />
            <HomepageSpecial />
        </div>
    );
};

export default Homepage;