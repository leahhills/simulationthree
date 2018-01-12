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
            defaultUser: {}        
        };

        this.updateUser= this.updateUser.bind(this);
        this.handleFirstNameInput=this.handleFirstNameInput.bind(this);
        this.handleLastNameInput=this.handleLastNameInput.bind(this);
        this.handleSelectGender=this.handleSelectGender.bind(this);
        this.handleSelectHairColor=this.handleSelectHairColor.bind(this);
        this.handleSelectEyeColor=this.handleSelectEyeColor.bind(this);
        this.handleSelectHobby=this.handleSelectHobby.bind(this);
        this.handleSelectBirthDay = this.handleSelectBirthDay.bind(this);
        this.handleSelectBirthMonth=this.handleSelectBirthMonth.bind(this);
        this.handleSelectBirthYear=this.handleSelectBirthYear.bind(this);
        this.resetUser = this.resetUser.bind(this);
       
        this.getCurrentUser();
    }

    resetUser() {
        const _defaultUser = Object.assign({}, this.state.defaultUser);
        this.setState({
            currentUser: _defaultUser
        });
    }

    getCurrentUser() {
        this.service.getCurrentUser()
        .then(response => {
            console.log('got current user', response.data);
            const userData = response.data;
            this.setState({
                currentUser: userData,
                defaultUser: userData
            });
        })
        .catch(err => {
            console.log('error getting current user', err);
        });
    }

    updateUser() {
        const userToUpdate = {
            firstname: this.state.currentUser.firstname,
            lastname: this.state.currentUser.lastname,
            haircolor: this.state.currentUser.haircolor,
            eyecolor: this.state.currentUser.eyecolor,
            hobby: this.state.currentUser.hobby,
            birthmonth: this.state.currentUser.birthmonth,
            birthday: this.state.currentUser.birthday,
            birthyear: this.state.currentUser.birthyear
        };
        this.service.updateUser(this.state.currentUser.id, userToUpdate)
        .then(response => {
            console.log('successfully updated user');
        })
        .catch(err => {
            console.log('error updating user', err);
        })
    }

    handleFirstNameInput(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.firstname = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }

    handleLastNameInput(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.lastname = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }

    handleSelectGender(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.gender = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }

    handleSelectHairColor(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.haircolor = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }

    handleSelectEyeColor(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.eyecolor = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }
    
    handleSelectHobby(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.hobby = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }
    handleSelectBirthMonth(evt){
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.birthmonth = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }
    handleSelectBirthDay(evt) {
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.birthday = newValue;
        this.setState({
            currentUser: _currentUser 
        });
    }
    handleSelectBirthYear(evt) {
        let newValue = evt.target.value;
        let _currentUser = this.state.currentUser;
        _currentUser.birthyear = newValue;
        this.setState({
            currentUser: _currentUser 
        });
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
                                <button className="update_button" onClick={this.updateUser}>Update</button>
                                <button className="cancel_button" onClick={this.resetUser}>Cancel</button>
                            </div>
                        
                        </div>


                    {/* User selected options */}

                        <div className="user_select_options">
                           
                            <div className="user_select_options_child">
                               
                            

                        {/* Options on left side */}
                                <div className="select_options_left">
                                    
                                    <div className="firstname_section">
                                        <span className="firstname_title">First Name</span>
                                            <input type="text" className="firstname_input" value={this.state.currentUser.firstname} onChange={this.handleFirstNameInput}/>
                                    </div>
                                    
                                    <div className="lastname_section">
                                        <span className="lastname_title">Last Name</span>
                                            <input type="text" value={this.state.currentUser.lastname} onChange={this.handleLastNameInput} className="lastname_input"/>
                                    </div>

                                    <div className="gender_section">
                                        <span className="gender_title" >Gender</span> 
                                        <select className="gender_options" value={this.state.currentUser.gender} onChange={this.handleSelectGender}>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                    </div>

                                    <div className="haircolor_section">
                                        <span className="haircolor_title">Hair Color</span>
                                        <select className="haircolor_options" value={this.state.currentUser.haircolor} onChange={this.handleSelectHairColor}>
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
                                        <select className="eyecolor_options" value ={this.state.currentUser.eyecolor} onChange={this.handleSelectEyeColor}>
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
                                        <select className="hobby_select_options" value={this.state.currentUser.hobby} onChange={this.handleSelectHobby}>
                                            <option value="video games">Video Games</option>
                                            <option value="hiking">Hiking</option>
                                            <option value="fishing">Fishing</option>
                                            <option value="rafting">Rafting</option>
                                        </select>
                                    </div>
                                    <div className="birthday_day_section">
                                        <span className="birthday_title" >Birthday</span>    
                                        <select className="birthday_day_options" value={this.state.currentUser.birthday} onChange={this.handleSelectBirthDay}>
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
                                        <select className="birthday_month_options" value ={this.state.currentUser.birthmonth} onChange={this.handleSelectBirthMonth}>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
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

