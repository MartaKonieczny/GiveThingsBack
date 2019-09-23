import React from 'react';



const apiUrl = 'http://localhost:3001';

class HomeFilterFounOrga extends React.Component{

    state = {
        org: 'foundations',
        list: [],
        currentPage: 1,
        orgPerPage: 3
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
                    org: name
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

    handleClickPage= (e,i)=>{
        this.setState({
            currentPage: i
        })
    };

    render(){
        const descriptions = {
            foundations: <div><h4>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,</h4><h4>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,</h4><h4>komu pomagają i czego potrzebują.</h4></div>,
            organizations: <div><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4><h4>Blanditiis ducimus, eius eum explicabo impedit ipsum labore maiores,</h4><h4>maxime nemo neque nihil nulla omnis praesentium sapiente tempore unde!</h4></div>,
            collections: <div><h4>Blanditiis ducimus, eius eum explicabo impedit ipsum labore maiores.</h4><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nemo,</h4><h4>neque nihil nulla omnis praesentium sapiente tempore unde!</h4></div> ,
        };

        const {list, currentPage,orgPerPage} = this.state;

        const indexOfLast = currentPage * orgPerPage;
        const indexOfFirst = indexOfLast-orgPerPage;
        const currentList = list.slice(indexOfFirst, indexOfLast);

        const elements = currentList.map((d)=>{
            return (
                <div>
                    <li key={d.id}>
                        <h3>{d.category} "{d.name}"</h3>
                        <div className="border">
                            <p>Cel i misja: {d.goals}</p>
                            <h4>{d.things}</h4>
                        </div>
                    </li>
                </div>
            )
        });


        const pageNumbers = [];
        for (let i=1; i<= Math.ceil(list.length/orgPerPage); i++){
            const page = <li key={i} onClick={e=>this.handleClickPage(e,i)} className={this.state.currentPage === i ? "active" : ""}>{i}</li>
            pageNumbers.push(page)
        }

        return(
            <div id="fundacja-organizacje" className="foundation-organizations">
                <div className="who">
                    <p>Komu pomagamy?</p>
                    <div className="ornament"></div>
                </div>
                <div className="list">
                    <ul>
                        <li onClick={this.handleOnClick('foundations')} value="foundations"><p>Fundacjom</p></li>
                        <li onClick={this.handleOnClick('organizations')} value="organizations"><p>Organizacjom</p><p>pozarządowym</p></li>
                        <li onClick={this.handleOnClick('collections')} value="collections"><p>Lokalnym</p><p>zbiórkom</p></li>
                    </ul>
                </div>
                <div className="paginationList">
                    <h4>{descriptions[this.state.org]}</h4>
                    <ul className="org">
                        {elements}
                    </ul>
                </div>
                <div className="pages">
                    <ul>
                        {pageNumbers}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeFilterFounOrga;