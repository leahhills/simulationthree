import axios from 'axios';

export default class UserService {
    constructor() {
        // Should load this from dotenv using webpack + webpack env plugin
        this.baseURL = 'http://localhost:3008';
    }

    getFriendsList() {
        return axios.get(`/api/friend/list`);
    }
    addFriend(friendId) {
        return axios.post(`/api/friend/add`, friendId);
    }
    removeFriend(friendId) {
        return axios.post(`/api/friend/remove`, friendId);
    }
    getUserList(page) {
        return axios.get(`/api/user/list?page=${page}`);
    }
}