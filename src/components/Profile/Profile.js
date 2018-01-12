import React, { Component } from 'react';
import HeaderProfile from './../Headers/HeaderProfile/HeaderProfile';
import './Profile.css';
import dogpic from './../../pictures/dogpic.jpg';
import UserService from './../../services/UserService';

export default class Profile extends Component {
    
    constructor(props) {
        super(props);

        this.service = new UserService();

        this.state = {
            currentUser: {},
            firstNameInput:'',
            lastNameInput:''
        };

        this.getCurrentUser();
    }

    getCurrentUser() {
        this.service.getCurrentUser()
        .then(response => {
            console.log('got current user', response.data);
            this.setState({
                currentUser: response.data
            });
        })
        .catch(err => {
            console.log('error getting current user', err);
        });
    }

    updateUser() {
        this.service.updateUser(this.state.currentUser.id)
        .then(response => {
            console.log('successfully updated user');
        })
        .catch(err => {
            console.log('error updating user', err);
        })
    }

    render() {
        return (
          <div>
              <HeaderProfile/>
                <div className="profile_parent">

                    <div className="profile_child">
                        
                    {/* Header content */}

                        <div className="user_content_header">
                            
                                <img src={ this.state.currentUser.image } alt="supposed to be a robot pic"className="profile_img"/>
                                <div className="profile_username_container">
                                    {this.state.currentUser.firstname} {this.state.currentUser.lastname}
                                </div>
                            <div className="button_container">
                                <button className="update_button">Update</button>
                                <button className="cancel_button">Cancel</button>
                            </div>
                        
                        </div>


                    {/* User selected options */}

                        <div className="user_select_options">
                           
                            <div className="user_select_options_child">
                               
                            

                        {/* Options on left side */}
                                <div className="select_options_left">
                                    
                                    <div className="firstname_section">
                                        <span className="firstname_title">First Name</span>
                                            <input type="text" className="firstname_input"/>
                                    </div>
                                    
                                    <div className="lastname_section">
                                        <span className="lastname_title" >Last Name</span>
                                            <input type="text" className="lastname_input"/>
                                    </div>

                                    <div className="gender_section">
                                        <span className="gender_title">Gender</span> 
                                        <select className="gender_options">
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                    </div>

                                    <div className="haircolor_section">
                                        <span className="haircolor_title">Hair Color</span>
                                        <select className="haircolor_options">
                                            <option value="brown">Brown</option>
                                            <option value="blue">Blue</option>
                                            <option value="green">Green</option>
                                            <option value="red">Red</option>
                                            <option value="blonde">Blonde</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>

                                    <div className="eyecolor_section">
                                        <span className="eyecolor_title">Eye Color</span>
                                        <select className="eyecolor_options">
                                            <option value="brown">Brown</option>
                                            <option value="blue">Blue</option>
                                            <option value="green">Green</option>
                                        </select>
                                    </div>

                                </div>




                        {/* options on right side */}

                                <div className="select_options_right">
                                    <div className="hobby_select_section">
                                       <span className="hobby_title">Hobby</span> 
                                        <select className="hobby_select_options">
                                            <option value="video games">Video Games</option>
                                            <option value="hiking">Hiking</option>
                                            <option value="fishing">Fishing</option>
                                            <option value="rafting">Rafting</option>
                                        </select>
                                    </div>
                                    <div className="birthday_day_section">
                                        <span className="birthday_title">Birthday</span>    
                                        <select className="birthday_day_options">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>

                                    <div className="birthday_month_section">
                                        <span className="birthmonth_title">Birthday Month</span> 
                                        <select className="birthday_month_options">
                                            <option value="january">January</option>
                                            <option value="february">February</option>
                                            <option value="march">March</option>
                                            <option value="april">April</option>
                                            <option value="may">May</option>
                                            <option value="june">June</option>
                                            <option value="july">July</option>
                                            <option value="august">August</option>
                                            <option value="september">September</option>
                                            <option value="october">October</option>
                                            <option value="november">November</option>
                                            <option value="december">December</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                        </div>
                    
                    </div>







                </div>
              
          </div>  
        );
    }
};

