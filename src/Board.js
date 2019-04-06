import React from 'react';
import _ from "lodash";
import Cards from "./Card"

const Board = () => {
    const members= _.uniqBy(cards.flatMap(card => card.members), (member => member.username));
    const filterCardsByUser = (cards, username) => cards.filter(card => _.some(card.members, ["username", username]));

    return (
        <div>
            {
                members.map(member =>
                <Cards member= { member } cardsByUser={filterCardsByUser(cards, member.username)}/>
                )}

        </div>
    );
};



export default Board;


const cards = [
    {
        id: "5c9d3043610f8f16a410e9c3",
        name:"As logged in user I can see cards grouped by users (hard coded)",
        url:"https://trello.com/c/OLpMKVda/3-as-logged-in-user-i-can-see-cards-grouped-by-users-hard-coded",
        members: [
            {username:"mhonert",
                fullName:"Martin Honert"},

            {username:"andreeasultan2",
                fullName: "Andreea Sultan"}
        ]
    },

    {
        id: "5c9d3043610f8f16a410e9c4",
        name:"As a logged in user I can order cards via Drag and Drop",
        url:"https://trello.com/c/OLpMKVda/3-as-logged-in-user-i-can-see-cards-grouped-by-users-hard-coded",
        members: [

            {username:"andreeasultan2", fullName: "Andreea Sultan"}
        ]
    },

    {
        id: "5c9d3043610f8f16a410e9c5",
        name:"As a logged in user I can see all cards with due date today",
        url:"https://trello.com/c/OLpMKVda/3-as-logged-in-user-i-can-see-cards-grouped-by-users-hard-coded",
        members: [
            {username:"mhonert", fullName:"Martin Honert"},

        ]
    }
]
