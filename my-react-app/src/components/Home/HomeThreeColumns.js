import React from 'react';

class HomeThreeColumns extends React.Component{
    render(){
        return(
            <div className="home-three-columns">
                <div>
                    <p className="number">10</p>
                    <p className="category" >oddanych worków</p>
                    <div className="description"><p>Lorem ipsum dolor sit amet consectetur.</p><p>Adipisci alias dolorum eius numquam.</p><p>Obcaecati  odit velit voluptatem.</p></div>
                </div>
                <div className="margin">
                    <p className="number">5</p>
                    <p className="category">wspartych organizacji</p>
                    <div className="description"><p>Lorem ipsum dolor sit amet consectetur.</p><p>Adipisci alias dolorum eius numquam.</p><p>Obcaecati  odit velit voluptatem.</p></div>
                </div>
                <div>
                    <p className="number">7</p>
                    <p className="category">zorganizowanych zbiórek</p>
                    <div className="description"><p>Lorem ipsum dolor sit amet consectetur.</p><p>Adipisci alias dolorum eius numquam.</p><p>Obcaecati  odit velit voluptatem.</p></div>
                </div>
            </div>

        )
    }
}

export default HomeThreeColumns;