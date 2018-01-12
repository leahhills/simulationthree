import React, {Component} from 'react';
import HeaderSearch from './../Headers/HeaderSearch/HeaderSearch';
import UserService from './../../services/UserService';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.service = new UserService();

        this.state = {
            searchText: '',
            baseFriendsList: [],
            friendsList: [],
            selectOption: ''
        }
        
        this.searchClick = this.searchClick.bind(this);
        this.handleSearchTextOnChange = this.handleSearchTextOnChange.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);

        this.getUserList(1);
    }

    getUserList(page) {
        this.service.getUserList(page)
        .then(friendsList => {
            console.log(friendsList.data)
            this.setState({
                baseFriendsList: friendsList.data.userList,
                friendsList: friendsList.data.userList
            });
        })
        .catch(err => {
            console.log('Error getting friends list:', err);
        });
    }

    searchClick() {
        console.log('I AM FILTERING ON', this.state.searchText, this.state.friendsList);
        
        const newFriendsList = this.state.baseFriendsList.filter(friend => {
            return friend.name.toLowerCase().includes(this.state.searchText.toLowerCase());
        });

        this.setState({
            friendsList: newFriendsList
        });
    }

    handleSearchTextOnChange(evt) {
        console.log('I am handling the onChange', evt.target.value)
        this.setState({
            searchText: evt.target.value
        });
    }

    handleSelectChange(evt) {
        this.setState({
            selectOption: evt.target.value
        });   
    }

    resetClick() {
        this.setState({
            searchText:'',
            friendsList:this.state.baseFriendsList

        })
    }

    render() {
        const friendsListElement = this.state.friendsList
            .map(friend => {
                return (
                    <div key={friend.id} className="friendsListItem">
                        <div className="test_picture">
                            <img className="robopic"src={friend.image} alt="meow"/>
                        </div>
                        <div className="friendsListItemName">{friend.firstname} {friend.lastname}</div>
                        <button className="add_friend_button">Add Friend</button>
                    </div>
                );
            });


        return (
            <div>
                <HeaderSearch/>

                <div className="search_parent">

                    <div className="search_content_container">
                        <div className="search_header">

                            <select className="filter_firstorlast" value = { this.state.selectOption } onChange = { this.handleSelectChange }>
                                <option value="first">Last Name</option>
                                <option value="last">First Name</option>
                            </select>

                            <input type="text" value={ this.state.searchText } onChange={ this.handleSearchTextOnChange } className="search_input"/>
                            <button key className="search_button" onClick={ this.searchClick}>Search</button>
                            <button className="reset_button"onClick={ this.resetClick}>Reset</button>
                        </div>

                        <div className="search_result_bottom">
                            <div className="search_result_container">
                                <div className="search_user_container">
                                    <div className="search_user_container_content scrollable_list">
                                        {friendsListElement}
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