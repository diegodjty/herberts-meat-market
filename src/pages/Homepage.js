import React from 'react';

import {Banner,HomepageContent,HomepageSpecial} from '../components/Homepage';
import Comments from './../components/Comments';
import Footer from './../components/Footer';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <HomepageContent />
            <HomepageSpecial />
        </div>
    );
};

export default Homepage;