import React, {Component} from 'react';
import HeaderLanding from './../Headers/HeaderLanding/HeaderLanding';
import './LandingPage.css';
import dogpic from './../../pictures/dogpic.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           friendList:[]
        }
        
    }

    componentDidMount(){
     axios.post(`/api/recommended`,{field:"hobby"})
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
                    <div className="test_picture"><img className="robopic"src="https://robohash.org/ojojaoisdjoadjoasjdasjdi?set=set4" alt="meow"/></div>
                    <div className="friendsListItemName">
                     {friend.firstname}{friend.lastname}</div>
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

                    <div className="profile_edit">
                        <img src={ dogpic } alt="dogfog" className="dogpic"/>
                        
                        <Link to="/profile">    
                            <button className="edit_button">Edit Profile</button>
                        </Link>
                        
                    </div>

                    <div className="welcome_box">Welcome to Helo! Find recommended friends based on
                        your similarities, and even search for them by name. The more you update your
                        profile, the better recommendations we can make!</div>

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