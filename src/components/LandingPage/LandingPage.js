import React, {Component} from 'react';
import HeaderLanding from './../Headers/HeaderLanding/HeaderLanding';
import './LandingPage.css';
import dogpic from './../../pictures/dogpic.jpg';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friendsList: [
                {
                    id: 1,
                    name: 'Margarat Jamiesrs'
                },

                {
                    id: 2,
                    name: 'Xena Ryan'
                }, 
                
                {
                    id: 3,
                    name: 'Tim Boner'
                },
                
                {
                    id: 4,
                    name: 'Jackal Manners'
                },
                
                {
                    id: 5,
                    name: 'Pizza Bob'
                },
                
                {
                    id: 6,
                    name: 'Larry Man Dan'
                },
                
                {
                    id: 7,
                    name: 'Puipy The Xena2'
                },
                
                {
                    id: 8,
                    name: 'Kitty Yes'
                },
                   
                {
                    id: 9,
                    name: 'Jackal Manners'
                }, 
                
                
                {
                    id: 10,
                    name: 'Pizza Bob'
                }, 
                
                {
                    id: 11,
                    name: 'Larry Man Dan'
                }, 
                
                {
                    id: 12,
                    name: 'Puipy The Xena2'
                },
                
                {
                    id: 13,
                    name: 'Puipy The Xena2'
                }, 
                
                {
                    id: 14,
                    name: 'Kitty Yes'
                },
                   
                {
                    id: 15,
                    name: 'Jackal Manners'
                }, 
                
                {
                    id: 16,
                    name: 'Pizza Bob'
                }, 
                
                {
                    id: 17,
                    name: 'Larry Man Dan'
                },
                
                {
                    id: 18,
                    name: 'Puipy The Xena2'
                },
                
                
                {
                    id: 19,
                    name: 'Margarat Jamiesrs'
                }, 
                
                
                {
                    id: 20,
                    name: 'Xena Ryan'
                },

                {
                    id: 21,
                    name: 'Tim Boner'
                },
                
                {
                    id: 22,
                    name: 'Jackal Manners'
                },
                
                {
                    id: 23,
                    name: 'Pizza Bob'
                }, 
                
                {
                    id: 24,
                    name: 'Larry Man Dan'
                },
                    
                {
                    id: 25,
                    name: 'Puipy The Xena2'
                },
                
                {
                    id: 26,
                    name: 'Kitty Yes'},
                       
                {
                    id: 27,
                    name: 'Jackal Manners'
                }, 
                    
                {
                    id: 28,
                    name: 'Pizza Bob'
                },
                
                {
                    id: 29,
                    name: 'Larry Man Dan'
                },
                
                {
                    id: 30,
                    name: 'Puipy The Xena2'
                },
                
                {
                    id: 31,
                    name: 'Puipy The Xena2'
                }, 
                
                {
                    id: 32,
                    name: 'Kitty Yes'
                },
                       
                {
                    id: 34,
                    name: 'Jackal Manners'
                }, 
                
                {
                    id: 35,
                    name: 'Pizza Bob'
                },
                
                {
                    id: 36,
                    name: 'Larry Man Dan'
                },
                
                {
                    id: 37,
                    name: 'Puipy The Xena2'
                }

            ]
        }
        
    }

    render() {
        const friendsListElement = this.state.friendsList.map(friend => {
            return (
                <div className="friendsListItem">
                    <div className="test_picture"><img className="robopic"src="https://robohash.org/ojojaoisdjoadjoasjdasjdi?set=set4" alt="meow"/></div>
                    <div className="friendsListItemName">{ friend.name }</div>
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