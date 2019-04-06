import React from 'react';

const Cards = ({member, cardsByUser}) => {
    return (
        <div>
            <p>{member.fullName}</p>
            {cardsByUser.map(card =>
                <div key={card.id}>
                    <p>{card.name}</p>
                </div>

            )}

        </div>

    )

};

export default Cards;