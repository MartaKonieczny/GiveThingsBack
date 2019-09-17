import React from 'react';
import PaginationList from './PaginationList'

const apiUrl = 'http://localhost:3001';

class HomeFilterFounOrga extends React.Component{
    state = {
        org: 'foundations',
        list: []
    };

    componentDidMount() {
       this.fetchData(this.state.org);
    }

    fetchData = (name) => {
        fetch(`${apiUrl}/${name}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    list: data,
                });
                // console.log(data)
            })
            .catch(err => {
                alert('cos jest nie tak');
                // console.error(err);
            })
    };

    handleOnClick = name => e => {
        this.fetchData(name)
    };


    render(){
        return(
            <div id="fundacja-organizacje" className="foundation-organizations">
                <div className="who">
                    <p>Komu pomagamy?</p>
                    <div className="ornament"></div>
                </div>
                <div className="list">
                    <ul>
                        <li onClick={this.handleOnClick('foundations')}><p>Fundacjom</p></li>
                        <li onClick={this.handleOnClick('organizations')}><p>Organizacjom</p><p>pozarządowym</p></li>
                        <li onClick={this.handleOnClick('collections')}><p>Lokalnym</p><p>zbiórkom</p></li>
                    </ul>
                </div>
                <PaginationList list={this.state.list} />
            </div>
        )
    }
}

export default HomeFilterFounOrga;