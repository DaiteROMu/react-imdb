import React from 'react';

//Types
type RateProps = {
    callback: (value: number) => void;
};

const Rate: React.FC<RateProps> = ({ callback }) => {
    const [value, setValue] = React.useState(5);

    return (
        <div>
            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(Number(e.currentTarget.value))}
            />
            {value}
            <p>
                <button onClick={() => callback(value)}>Rate</button>
            </p>
        </div>
    );
};

export default Rate;
