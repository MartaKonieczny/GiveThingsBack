import React from 'react';
import LogRegi from "../LoginRegistration/LogRegi";
import MainSection from "../Sections/MainSection";

class HomeHeader extends React.Component{
    render(){
        return(
            <>
                <LogRegi/>
                <MainSection/>
            </>

        )
    }
}

export default HomeHeader;