import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import Nav from "../Nav/Nav";
import MainSection from "../Sections/MainSection";

class HomeHeader extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>,
                <Nav/>,
                <MainSection/>
            </>

        )
    }
}

export default HomeHeader;