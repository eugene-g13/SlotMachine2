import React, { useState, useEffect } from 'react';
import { Spinner } from './App';

interface IProps {
    spinners: Spinner[];
}

export const Display = (props: IProps) => {
    const [spinners, setSpinners] = useState(props.spinners);

    useEffect(() => {
        setSpinners(props.spinners);
    }, [props.spinners]);

    return (
        <div className="spins">
            {spinners &&
                // TODO: to delete , but CHECK for 'key' properly!
                spinners.map((el, index) => {
                    return <div key={index} className={`image image-${el.loading ? 'loading' : el.shownItem}`}></div>;
                })}
        </div>
    );
};
