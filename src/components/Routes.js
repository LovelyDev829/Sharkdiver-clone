import React from 'react'

import HomeApp from "./page_home/HomeApp"
import AboutOurCompanyApp from "./page_about/page_about_ourCompany/AboutOurCompanyApp"
import AboutSharkConservation from './page_about/page_about_sharkConservation/AboutSharkConservation';
import AboutReviews from './page_about/page_about_reviews/AboutReviews';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomeWelcome from './page_home/HomeWelcome';
import HomeVideo from './page_home/HomeVideo';

function Routes() {
    return (
        <div className='routes'>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => <HomeApp {...props} />}
                />
                <Route
                    exact
                    path="/home"
                    component={(props) => <HomeApp {...props} />}
                />
                <Route
                    exact
                    path="/about/our_company"
                    component={(props) => <AboutOurCompanyApp {...props} />}
                    // component={(props) => <HomeWelcome {...props} />}
                />
                <Route
                    exact
                    path="/about/shark_conservation"
                    component={(props) => <AboutSharkConservation {...props} />}
                    // component={(props) => <HomeVideo {...props} />}
                />
                <Route
                    exact
                    path="/about/reviews"
                    component={(props) => <AboutReviews {...props} />}
                />

            </Switch>
        </div>
    )
}

export default Routes
