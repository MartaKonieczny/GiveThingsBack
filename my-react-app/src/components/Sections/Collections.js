import React from 'react';

class Collections extends React.Component{
    render(){
        return(
            <div className="collections">
                <div className="desc-coll"><p>Blanditiis ducimus, eius eum explicabo impedit ipsum labore maiores</p><p>maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p>Nemo neque nihil nulla omnis praesentium sapiente tempore unde.</p></div>
                <div>
                    <ul>
                        <li>
                            <h3>Zbiórka "Lorem ipsum 1"</h3>
                            <div className="border">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>lorem, ipsum, dolor, amet</p>
                            </div>
                        </li>
                        <li>
                            <h3>Zbiórka "Lorem ipsum 2"</h3>
                            <div className="border">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>lorem, ipsum, dolor, amet</p>
                            </div>
                        </li>
                        <li>
                            <h3>Zbiórka "Lorem ipsum 3"</h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>lorem, ipsum, dolor, amet</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Collections;