import React, { useState, useEffect } from 'react';
import { Reel } from './App';

interface IProps {
    reels: Reel[];
}

export const Display = (props: IProps) => {
    const [reels, setReels] = useState(props.reels);

    useEffect(() => {
        setReels(props.reels);
    }, [props.reels]);

    return (
        <div className="spins">
            {reels &&
                // TODO: to delete , but CHECK for 'key' properly!
                reels.map((el, index) => {
                    return <div key={index} className={`image image-${el.loading ? 'loading' : el.shownItem}`}></div>;
                })}
        </div>
    );
};
