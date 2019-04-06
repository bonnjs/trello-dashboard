import React from 'react';
import {trelloApiKey, trelloOauthSecret} from '../config/api'
const {OAuth} = require('oauth');

const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "Trello Dashboard";

const loginCallback = window.location.origin + '/login-success';
const oauth = new OAuth(requestURL, accessURL, trelloApiKey, trelloOauthSecret, "1.0A", loginCallback, "HMAC-SHA1");

const login = () =>  {
    oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
        window.location.href = `${authorizeURL}?oauth_token=${token}&name=${appName}`;
    });
};

export default function() {
    return (
        <div>
            <p>Welcome to the {appName}</p>
            <button onClick={login}>Login</button>
        </div>
    );
}
