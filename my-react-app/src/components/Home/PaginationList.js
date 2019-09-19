import React from 'react';


const PaginationList = ({ list }) => {
    if (!list.length) {
        return null
    }
    const data = list.map(d => {
        return(
            <li key={d.id}>
                <h3>{d.category} "{d.name}"</h3>
                <div className="border">
                    <p>Cel i misja: {d.goals}</p>
                    <p>{d.things}</p>
                </div>
            </li>
        )
    });
    return (
    <div className="paginationList">
        <ul>
            {data}
        </ul>
    </div>
    )
};

export default PaginationList;