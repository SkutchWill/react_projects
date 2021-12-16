import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props){
    const dogLinks = props.dogs.map(dog =>( 
    <li className='nav-item'>
        <NavLink to={`/dogs/${dog.name}`} className='nav-link' key={dog.name}>{dog.name}</NavLink>
    </li>))
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='/dogs'>Dog App</a>
            <button 
                className='navbar-toggler' 
                type='button' 
                data-bs-toggle='collapse' 
                data-bs-target='#navbarNav' 
                aria-controls='navbarNav'
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'/>
            </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/dogs' className='nav-link inactive' key='home'>Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
        </nav>
    )
}
