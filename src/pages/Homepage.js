import React from 'react';

import {Banner,HomepageContent,HomepageSpecial} from '../components/Homepage';

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