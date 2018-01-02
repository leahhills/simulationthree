const chai = require('chai');
const expect = chai.expect;
//const asPromised = require('chai-as-promised');
//chai.use(asPromised);
//let authenticator = require('./authenticator');
const axios = require('axios');

describe('# Recommended Controller', () => {
    it('recommended/', () => {
        return axios.post('http://localhost:3008/api/recommended')
        .then(response => {
            let friendsList = response.data;
            const bobExists = friendsList.find(friend => {
                return friend.id === 28;
            });
            expect(bobExists.id).to.equal(28);
            expect(friendsList.length).to.equal(36);
        });
    });
    it('recommended/add', () => {
        return axios.post('http://localhost:3008/api/recommended/add', {
            name: 'XCHARLIEX'
        })
        .then(response => {
            expect(response.status).to.equal(201);
        });
    });
});