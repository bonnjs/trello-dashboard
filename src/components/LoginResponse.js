import React from 'react';
import {Link} from 'react-router-dom';
import {accessURL, requestURL} from "../config/constants";
import {trelloApiKey, trelloOauthSecret} from "../config/api";
import {OAuth} from 'oauth';

let tokenSecret = localStorage.getItem('tokenSecret');
const loginCallback = window.location.origin + '/login-success';

export default function(props) {
    let queryParams = props.location.search.substr(1,);

    let [authToken, verifyToken] = queryParams.split('&').map(token=> token.split('=')[1]);
    const isLoggedIn = authToken && verifyToken;
    const oauth = new OAuth(requestURL, accessURL, trelloApiKey, trelloOauthSecret, "1.0A", loginCallback, "HMAC-SHA1");
    let userInfo = {};


    // just an example request to showcase how the requests can be made
    oauth.getOAuthAccessToken(authToken, tokenSecret, verifyToken, function(error, accessToken, accessTokenSecret, results){
        oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET", accessToken, accessTokenSecret, (error, data, response)=>{
            if(data) {
                userInfo = JSON.parse(data);
                console.log(userInfo);
            }
        });
    });

    if(isLoggedIn && userInfo) {
        return  (
            <div>
                successfully logged in, check console
            </div>
        )
    } else {
        return (
            <p> Oh , something went wrong. Did you denied permission? <Link to="/">Back to login page</Link> </p>
        )
    }
}
