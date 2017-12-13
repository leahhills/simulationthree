import React, { Component } from 'react';
import './HeaderSearch.css';
import homeiconforsim3 from './../../../pictures/homeiconforsim3.png';
import searchsim from './../../../pictures/searchsim3.png';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
        
            <div className="header_bar_main">
               <section className="header_helo">Helo</section>
                <img src={ homeiconforsim3 } alt="this is a home icon logo" className="home_logo"/>
                   
                <img src={ searchsim } alt="this is a magnifying glass logo" className="search_logo"/>

                <span className="search_title_header">Search</span>
            <Link to ="/" style ={{textDecoration: 'none'}}>
                <section className="header_logout">Logout</section>
            </Link>
               
            </div>
        )
    }
}
