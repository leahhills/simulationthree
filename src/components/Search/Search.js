import React, {Component} from 'react';
import HeaderSearch from './../Headers/HeaderSearch/HeaderSearch';
import UserService from './../../services/UserService';
import './Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);

        const { match: { params } } = this.props;

        this.service = new UserService();

        this.state = {
            searchText: '',
            baseFriendsList: [],
            friendsList: [],
            selectOption: '',
            ghettoPageArray: [],
            currentFriends: [],
            pageId: params.pageId
        }
        
        this.searchClick = this.searchClick.bind(this);
        this.handleSearchTextOnChange = this.handleSearchTextOnChange.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.removeFriend = this.removeFriend.bind(this);
        this.addFriend = this.addFriend.bind(this);

        this.getUserList(this.state.pageId);
    }

    removeFriend(userId) {
        this.service.removeFriend(userId)
        .then(response => {
            console.log('successully removed friend:', response)
            this.getUserList(this.state.pageId);
        })
        .catch(err => console.log(err));
    }

    addFriend(userId) {
        this.service.addFriend(userId)
        .then(response => {
            console.log('successully added friend:', response)
            this.getUserList(this.state.pageId);
        })
        .catch(err => console.log(err));
    }

    getUserList(page) {
        // should really have this call in ducks and cache the response and other stuff so it doesn't keep getting called
        this.service.getUserList(page)
        .then(friendsList => {
            this.service.getFriendsList()
            .then(friends => {
                console.log(friendsList.data, friends.data)
                let _ghettoPageArray = [];
                for(let i = 0; i < friendsList.data.totalPages; i++) {
                    _ghettoPageArray.push(i+1);
                }
                let friendIds = friends.data.map(friend => {
                    return friend.id;
                });
                let _friendsList = friendsList.data.userList.map(friend => {
                    friend.isFriend = friendIds.includes(friend.id);
                    return friend;
                });
                this.setState({
                    baseFriendsList: _friendsList,
                    friendsList: _friendsList,
                    ghettoPageArray: _ghettoPageArray
                });
            })
            .catch(err => console.log(err));
        })
        .catch(err => {
            console.log('Error getting friends list:', err);
        });
    }

    searchClick() {
        console.log('I AM FILTERING ON', this.state.searchText, this.state.friendsList);
        
        const newFriendsList = this.state.baseFriendsList.filter(friend => {
            return friend.firstname.toLowerCase().includes(this.state.searchText.toLowerCase()) || friend.lastname.toLowerCase().includes(this.state.searchText.toLowerCase());
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
                let button = null;
                if(friend.isFriend) {
                    button = <button className="remove_friend_button" onClick={() => this.removeFriend(friend.id)}>Remove Friend</button>;
                } else {
                    button = <button className="add_friend_button" onClick={() => this.addFriend(friend.id)}>Add Friend</button>
                }

                return (
                    <div key={friend.id} className="friendsListItem">
                        <div className="test_picture">
                            <img className="robopic"src={friend.image} alt="meow"/>
                        </div>
                        <div className="friendsListItemName">{friend.firstname} {friend.lastname}</div>
                        {button}
                    </div>
                );
            });

        const ghettoPaginationButtons = this.state.ghettoPageArray
            .map(pageId => {
                return (
                    <a key={pageId} className="pagination_link" href={`/search/${pageId}`}>
                        <div className="pagination_link_container">
                            <span>{pageId}</span>
                        </div>
                    </a>
                )
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

                                       {ghettoPaginationButtons}

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