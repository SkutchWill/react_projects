import React, { Component } from 'react';
import './DogList.css';
import { Link } from 'react-router-dom';

class DogList extends Component {
    render() {
        return(
            <div className='DogList'>
                <h1 className='display-1 text-center mt-3 mb-5'>Dog List!</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dogs.map(d => (
                            <div className='Dog col-lg-4 text-center' key={d.name}>
                                <img src={d.src} alt={d.name}/>
                                <Link className='underline' to={`${d.name}`} state={d}><h3>{d.name}</h3></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;