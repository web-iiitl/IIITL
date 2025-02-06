import React from 'react'
type Props= {
  heading: string,
  children: string | React.JSX.Element | React.JSX.Element[],
  id: string
}

export default function Section({ heading, children, id }: Props) {
    return (
      <div className="min-h-[60vh]">
        <h2 className="text-3xl text-bluedark font-bold" id={id}>{heading}</h2>
        <div className="">{children}</div>
      </div>
    );
  };