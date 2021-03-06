import React from 'react';

interface IProps {
    credits: number;
    bet: number;
    won: number;
}

const Header: React.FC<IProps> = ({ credits, bet, won }) => {
    const classes = won ? 'color-green' : '';

    return (
        <div>
            <div>Credits: {credits} </div>
            <div>Bet: {bet} </div>
            <div>
                Last spin won: <span className={classes}>{won}</span>
            </div>
        </div>
    );
};

export default Header;
