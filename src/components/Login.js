import React from 'react';
import {requestURL, accessURL, authorizeURL, appName} from '../config/constants';
import {trelloApiKey, trelloOauthSecret} from '../config/api';
const {OAuth} = require('oauth');

const loginCallback = window.location.origin + '/login-success';
const oauth = new OAuth(requestURL, accessURL, trelloApiKey, trelloOauthSecret, "1.0A", loginCallback, "HMAC-SHA1");

const login = () =>  {
    oauth.getOAuthRequestToken(function(error, token, tokenSecret, results){
        localStorage.setItem('tokenSecret', tokenSecret);
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
