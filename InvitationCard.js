import React from 'react';

const InvitationCard = () => {
    const handleYesClick = () => {
        alert("Thank you for accepting the invitation!");
    };

    const handleLoveClick = () => {
        alert("We're excited to celebrate with you!");
    };

    return (
        <div className="invitation-card">
            <h1>You're Invited!</h1>
            <p>Join us for a special birthday celebration!</p>
            <div className="buttons">
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleLoveClick}>I would love to</button>
            </div>
        </div>
    );
};

export default InvitationCard;