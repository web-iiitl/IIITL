import React from 'react';
type Props= {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Subheading({children}: Props) {
    return(
        <h2 className="text-3xl text-bluedark font-bold">{children}</h2>
        
    );
}