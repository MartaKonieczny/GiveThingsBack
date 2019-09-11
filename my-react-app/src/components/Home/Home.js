import React from 'react';
import HomeHeader from '../Home/HomeHeader'
import HomeThreeColumns from '../Home/HomeThreeColumns'
import HomeWhatIsGoingOn from "./HomeWhatIsGoingOn";
import HomeAbout from "./HomeAbout";
import HomeFoundationOrganizations from "./HomeFoundationOrganizations";
import HomeContact from "./HomeContact";

class Home extends React.Component{
    render(){
        return(
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeWhatIsGoingOn/>
                <HomeAbout/>
                <HomeFoundationOrganizations/>
                <HomeContact/>
            </>
        )
    }
}

export default Home;