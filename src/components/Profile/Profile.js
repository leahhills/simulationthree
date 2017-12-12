import React, { Component } from 'react';
import Header from './../Header/Header';
import './../Header/Header.css';
import './Profile.css';
import dogpic from './../../pictures/dogpic.jpg';

export default class Profile extends Component {
    
    render() {
        return (
          <div>
              <Header/>
                <div className="profile_parent">

                    <div className="profile_child">
                        
                        <div className="user_content_header">
                            <img src={ dogpic } alt="supposed to be a robot pic"className="profile_img"/>
                            <button className="update_button">Update</button>
                            <button className="cancel_button">Cancel</button>
                        </div>

                        <div className="user_select_options">
                        </div>
                    
                    </div>







                </div>
              Gueeess what i'm the profile page.
          </div>  
        );
    }
};

