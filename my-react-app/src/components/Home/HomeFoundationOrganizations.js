import React from 'react';
import Foundations from "../Sections/Foundations";
import Organizations from "../Sections/Organizations";
import Collections from "../Sections/Collections";

class HomeFoundationOrganizations extends React.Component{
    render(){
        return(
            <>
                <div>
                    <p>Komu pomagamy?</p>
                    <div>ozdobnik</div>
                </div>
                <div>
                    <ul>
                        <li>Fundacjom</li>
                        <li>Organizacjom pozarządowym</li>
                        <li>Lokalnym zbiórkom</li>
                    </ul>
                </div>
                <Foundations/>
                <Organizations/>
                <Collections/>
            </>

        )
    }
}

export default HomeFoundationOrganizations;