// TeamMember.tsx

import React from 'react';

interface TeamMemberProps {
  name: string;
  info: string;
  pictureUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, info, pictureUrl }) => {
  return (
    <div className="flex flex-col items-center border m-4 sm:p-6 rounded-xl dark:border-gray-700">
      <img
        className="object-cover rounded-xl aspect-square"
        src={pictureUrl}
        alt={name}
        width="400" 
        height="500"
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-black">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{info}</p>
    </div>
  );
};

export default TeamMember;
