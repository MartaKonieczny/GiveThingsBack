import React from 'react';
import Foundations from "../Sections/Foundations";
import Organizations from "../Sections/Organizations";
import Collections from "../Sections/Collections";

class HomeFoundationOrganizations extends React.Component{
    // state={
    //     fundacion: true,
    // }
    render(){
        return(
            <div id="fundacja-organizacje" className="foundation-organizations">
                <div className="who">
                    <p>Komu pomagamy?</p>
                    <div className="ornament"></div>
                </div>
                <div className="list">
                    <ul>
                        <li><p>Fundacjom</p></li>
                        <li><p>Organizacjom</p><p>pozarządowym</p></li>
                        <li><p>Lokalnym</p><p>zbiórkom</p></li>
                    </ul>
                </div>
                <Foundations/>
                <Organizations/>
                <Collections/>
            </div>

        )
    }
}

export default HomeFoundationOrganizations;