import React from 'react';
import HomeFilterFounOrga from "./HomeFilterFounOrga";

class HomeFoundationOrganizations extends React.Component{
    state={
        filterFoundations: "",
        filterOrganizations: "",
        filterCollections: "",
    };

    changeFoundations = value =>{
        this.setState({
            filterFoundations: value
        })
    };
    changeOrganizations = value =>{
        this.setState({
            filterOrganizations: value
        })
    };
    changeCollections = value =>{
        this.setState({
            filterCollections: value
        })
    };


    render(){
        return(
            <div id="fundacja-organizacje" className="foundation-organizations">
                <HomeFilterFounOrga />
            </div>

        )
    }
}

export default HomeFoundationOrganizations;