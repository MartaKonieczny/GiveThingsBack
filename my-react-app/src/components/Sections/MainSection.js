import React from 'react';
import Nav from "../Nav/Nav";

class MainSection extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="img"></div>
                <div>
                    <Nav/>
                    <div className="start-helping">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div className="ornament"></div>
                        <div>
                            <ul>
                                <li><p>oddaj</p><p>rzeczy</p></li>
                                <li><p>zorganizuj</p><p>zbiórkę</p></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainSection;