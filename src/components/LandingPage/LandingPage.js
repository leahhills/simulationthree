import React, {Component} from 'react';
import HeaderLanding from './../Headers/HeaderLanding/HeaderLanding';
import './LandingPage.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import UserService from './../../services/UserService';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.service = new UserService();

        this.state = {
           friendList:[],
           currentUser:{},
           defaultUser:{}
        }
        this.getCurrentUser();
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

    componentDidMount(){

        axios.post(`/api/recommended`,{field:'hobby'})
            .then((response)=>{
                this.setState({friendList:response.data})
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    render() {
        console.log(this.state);
        const friendsListElement = this.state.friendList.map(friend => {
            return (
                <div className="friendsListItem" key={friend.id}>

                    <div className="test_picture">
                        <img className="robopic" src={friend.image} alt="meow"/>
                    </div>

                    <div className="friendsListItemName">
                        {friend.firstname}
                    </div>

                    <div className="friendlistItemLastName">
                        {friend.lastname}
                    </div>

                    <button className="add_friend_button">Add Friend</button>

                </div>
            );
        });

        return (

            <div className="landing_page_parent">
                
                <div className="header_component">                
                    <HeaderLanding />
                </div>


            <div className="landing_page_child">

                <div className="profile_container">

                    {/* <div className="profile_container_name">
                        
                    </div> */}

                    <div className="profile_edit">

                        <div className="user_leftside">
                            <img src={ this.state.currentUser.image } alt="meow" className="dogpic"/>
                        </div>

                        <div className="user_rightside">
                                <span className="user_firstname">{this.state.currentUser.firstname}</span>
                                <span className="user_lastname">{this.state.currentUser.lastname}</span>
                            <Link to="/profile" style={{textDecoration:'none'}}>    
                                <button className="edit_button" >Edit Profile</button>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="welcome_box">Welcome to Helo! Find recommended friends based on
                        your similarities, and even search for them by name. The more you update your
                        profile, the better recommendations we can make!
                    </div>

                </div>

                <div className="reccomended_friends_parent">

                    <div className="recmd_section_child">

                        <div className="recfriends_header">
                            <span className="friends_title"> Recommended Friends</span>
                            <span className="sortedby_header"> Sorted by  </span>
                        <select className="sortedby_options">
                            <option value="first">Last Name</option>
                            <option value="last">First Name</option>
                            <option value="gender">Gender</option>
                            <option value="hobby">Hobby</option>
                            <option value="h_color">Hair Color</option>
                            <option value="e_color">Eye Color</option>
                            <option value="birthday">Birthday</option>
                        </select>
                        </div>

                        <div className="scrollable_list">
                            { friendsListElement }
                        </div>
                    </div>
                </div>


            </div>


            </div>
        )
    }
}