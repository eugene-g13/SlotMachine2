import React from 'react';

interface IProps {
    credits: number;
    bet: number;
    setBet: (bet: number) => void;
    finalPayout: boolean;
    setFinalPayout: (finalPayout: boolean) => void;
    runSpin: (bet: number) => void;
}

const ControlPanel: React.FC<IProps> = props => {
    const { credits, bet, setBet, finalPayout, setFinalPayout, runSpin } = props;

    const handleMaximizeBet = () => {
        const maxBet = credits < 3 ? credits : 3;

        setBet(maxBet);

        runSpin(maxBet);
    };

    const handleSpin = () => {
        runSpin(bet);
    };

    return (
        <form
            action="#"
            onSubmit={e => {
                e.preventDefault();
            }}
        >
            <fieldset disabled={finalPayout}>
                <div className="d-flex flex-column">
                    <button
                        type="button"
                        onClick={() => {
                            bet < 3 ? setBet(bet + 1) : null;
                        }}
                    >
                        Add 1 Credit to your bet
                    </button>
                    <button onClick={handleMaximizeBet}>Maximize bet and Spin</button>
                    <button onClick={handleSpin} disabled={bet === 0}>
                        Spin
                    </button>
                    <div style={{ height: '50px' }} />
                    <button
                        onClick={() => {
                            setFinalPayout(true);
                        }}
                    >
                        Payout
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

export default ControlPanel;
