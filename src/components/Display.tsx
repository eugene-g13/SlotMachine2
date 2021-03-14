import React, { useState, useEffect } from 'react';
import { Reel } from './App';

interface IProps {
    reels: Reel[];
}

//const Display: React.FC<IProps> = (props: IProps) => {
const Display: React.FC<IProps> = ({ reels }) => {
    // TODO: to delete - NOT NEEDED
    // const [reels, setReels] = useState(props.reels);

    // useEffect(() => {
    //     setReels(props.reels);
    // }, [props.reels]);

    return (
        <div className="spins">
            {reels &&
                reels.map((el, index) => {
                    return <div key={index} className={`image image-${el.loading ? 'loading' : el.shownItem}`} />;
                })}
        </div>
    );
};

export default Display;
