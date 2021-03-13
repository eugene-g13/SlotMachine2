import React from 'react';

interface IProps {
    credits: number;
    bet: number;
    won: number;
}

export const Header = ({ credits, bet, won }: IProps): JSX.Element => {
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
