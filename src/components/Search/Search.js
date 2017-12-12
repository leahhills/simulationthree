import React, { Component } from 'react';
import Header from './../Header/Header';
import './Search.css';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            friendsList:[
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
                    <div className="test-picture"></div>
                    <div className="friendsListItemName">{ friend.name }</div>
                    <button className="add_friend_button">Add Friend</button>  
                </div>
            );
        });

        return (
          <div>
              <Header/>
             
              
              <div className="search_parent">

                <div className="search_content_container">
                    <div className="search_header">
                        <select className="filter_firstorlast">
                            <option value="first">Last Name</option>
                            <option value="last">First Name</option>
                        </select>
                        <input type="text" className="search_input"/>
                        <button className="search_button">Search</button>
                        <button className="reset_button">Reset</button>
                    </div>

                    <div className="search_result_bottom">
                        <div className="search_result_container">
                            <div className="search_user_container">
                                <div className="search_user_container_content scrollable_list">
                                    { friendsListElement }
                                </div>
                            </div>
                            <div className="pagination_parent">
                                <div className="pagination_container_child">

                                    <a className="pagination_link" href="/search/1">
                                        <div className="pagination_link_container">
                                            <span>1</span>
                                        </div>
                                    </a>

                                    
                                    <a className="pagination_link" href="/search/2">
                                        <div className="pagination_link_container">
                                            <span>2</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/3">
                                        <div className="pagination_link_container">
                                            <span>3</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/4">
                                        <div className="pagination_link_container">
                                            <span>4</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/5">
                                        <div className="pagination_link_container">
                                            <span>5</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/6">
                                        <div className="pagination_link_container">
                                            <span>6</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/7">
                                        <div className="pagination_link_container">
                                            <span>7</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/8">
                                        <div className="pagination_link_container">
                                            <span>8</span>
                                        </div>
                                    </a>
                                    
                                    
                                    <a className="pagination_link" href="/search/9">
                                        <div className="pagination_link_container">
                                            <span>9</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/10">
                                        <div className="pagination_link_container">
                                            <span>10</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/11">
                                        <div className="pagination_link_container">
                                            <span>11</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/12">
                                        <div className="pagination_link_container">
                                            <span>12</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/13">
                                        <div className="pagination_link_container">
                                            <span>13</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/14">
                                        <div className="pagination_link_container">
                                            <span>14</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/15">
                                        <div className="pagination_link_container">
                                            <span>15</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/16">
                                        <div className="pagination_link_container">
                                            <span>16</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/17">
                                        <div className="pagination_link_container">
                                            <span>17</span>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                    <a className="pagination_link" href="/search/18">
                                        <div className="pagination_link_container">
                                            <span>18</span>
                                        </div>
                                    </a>
                                
                                
                                
                                
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

                {/* { friendsList } */}
          </div>  
        );
    }
};