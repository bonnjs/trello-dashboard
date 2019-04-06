import React from 'react';
import { Link } from 'react-router-dom'
export default function(props) {
    let queryParams = props.location.search.substr(1,);
    let [authToken, verifyToken] = queryParams.split('&').map(token=> token.split('=')[1]);
    const isLoggedIn = authToken && verifyToken;

    const successMessage =  <p> Succesfully logged in</p>;
    const errorMessage = <p> Oh , something went wrong. Did you denied permision? <Link to="/">Back to login page</Link> </p>;

    return (
        <div>
            {isLoggedIn ? successMessage :errorMessage}
        </div>
    );
}
