import React, {Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';

class Menu extends Component {
    render() {
        return <div>

            <ul>
                <li>
                    <NavLink to="/about" className='menuLink' activeClassName='active'>About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className='menuLink' activeClassName='active'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className='menuLink' activeClassName='active'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className='menuLink' activeClassName='active'>Kontakt</NavLink>
                </li>
            </ul>
        </div>;
    }
}

export {Menu}