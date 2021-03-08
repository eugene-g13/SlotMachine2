import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Display } from "./Display";
import { ControlPanel } from "./ControlPanel";
import "./app.scss";

type SpinItem = "7" | "3bar" | "2bar" | "1bar" | "cherry" | "blank";
//type SpinItemsSet = [SpinItem, SpinItem, SpinItem]; // Tuple try?
type SpinItemsSet = SpinItem[];

export type Spinner = {
    items: SpinItemsSet;
    loading: boolean,
    index: number;
    shownItem: SpinItem;
}

const initialSpinners: Spinner[] = [
    {
        items: [],
        loading: false,
        index: 0,
        shownItem: "blank",
    },
    {
        items: [],
        loading: false,
        index: 0,
        shownItem: "blank",
    },
    {
        items: [],
        loading: false,
        index: 0,
        shownItem: "blank",
    },

];

// should be extracted to helpers.js
const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const App = () => {
    const [credits, setCredits] = useState(100);
    const [bet, setBet] = useState(0);
    const [won, setWon] = useState(0);
    const [finalPayout, setFinalPayout] = useState(false);
    const [spinners, setSpinners] = useState(initialSpinners);

    const sourceSpins = ["7", "3bar", "2bar", "2bar", "1bar", "1bar", "1bar", "cherry"];
    const blank = "blank";

    useEffect(() => {
        createSpinnerItems(spinners[0].items);
        createSpinnerItems(spinners[1].items);
        createSpinnerItems(spinners[2].items);
    }, []);

    // Fills 'arr' array by removing a random element from the source array.
    const createSpinnerItems = (arr: SpinItemsSet) => {
        let reduceArr = sourceSpins.slice() as SpinItemsSet;

        arr.push(blank);

        var i = reduceArr.length;

        while (i > 0) {
            let rnd = getRandomInt(i); 

            arr.push(reduceArr[rnd]);
            arr.push(blank);

            reduceArr.splice(rnd, 1);

            i--;
        }
    };

    const stopSpinner = async (spinIndex: number) => {
        const randomDelay = getRandomInt(2) * 500 + 500;

        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                let copy = [...spinners];

                copy[spinIndex].loading = false;

                setSpinners(copy);

                resolve();
            }, randomDelay);
        });
    };

    const rollSpinners = () => {
        let copy = [...spinners];

        copy.forEach((spinner) => {
            let rnd = getRandomInt(17);

            let itemName = spinner.items[rnd];

            spinner.index = rnd;
            spinner.shownItem = itemName;
            spinner.loading = true;
        });

        setSpinners(copy);
    }

    const runSpin = async (bet: number) => {
        setCredits(credits - bet);

        // disabling control block only
        setFinalPayout(true); 

        rollSpinners();

        // async for loop
        // for (const spinner of copy) {
        //     let res = await stopSpinner(spinner);
        // }

        await stopSpinner(0);
        await stopSpinner(1);
        await stopSpinner(2);

        payout(bet);
        
        setBet(0);

        setFinalPayout(false);
    };

    const calculateWon = (snapshot: SpinItemsSet) => {
        // For Each Cherry: 
        const length = snapshot.filter(el => el === "cherry").length;
        if (length) return 2 * length;

        // Bar, Bar, Bar: 
        if (snapshot.filter(el => el === "1bar").length === 3) return 25;

        // Double Bar, Double Bar, Double Bar: 
        if (snapshot.filter(el => el === "2bar").length === 3) return 50;

        // Triple Bar, Triple Bar, Triple Bar:
        if (snapshot.filter(el => el === "3bar").length === 3) return 100;

        // Any Bar, Any Bar, Any bar:
        if (snapshot.filter(el => el.includes("bar")).length === 3) return 5;

        // 7, 7, 7:
        if (snapshot.filter(el => el === "7").length === 3) return 300;

        return 0;
    }

    const payout = (bet: number) => {
        let snapshot: SpinItem[] = [];
        spinners.forEach(spinner => { snapshot.push(spinner.shownItem)});
        
        let wonAmount = calculateWon(snapshot);

        wonAmount = wonAmount * bet;

        if (snapshot.filter(el => el === "7").length === 3)
            wonAmount += 600;

        setWon(wonAmount);

        if (wonAmount > 0) setCredits(credits + wonAmount);
    };

    return (
        <div className="app">
            <div className="welcome">
                Welcome to the Virtual Slot Machine
            </div>
            <div className="d-flex justify-center">
                <div className="machine">
                    <div>
                        <Header credits={credits} bet={bet} won={won} />
                        <Display spinners={spinners} />
                    </div>
                    <div>
                        <ControlPanel
                            credits={credits}
                            bet={bet}
                            setBet={setBet}
                            finalPayout={finalPayout}
                            setFinalPayout={setFinalPayout}
                            runSpin={runSpin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;