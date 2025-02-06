import React, { useState, useEffect } from 'react';

function Head() {
  const [languages, setLanguages] = useState([
    'Indian Insitute of Information Technology, Lucknow',
    'भारतीय   सूचना   प्रौद्योगिकी   संस्थान, लखनऊ' ,
  ]);
  const [index, setIndex] = useState(0);

 

  return (
      <div
      className="md:m-4 max-sm:mx-0 max-md:m-2 max-sm:text-base max-md:text-xl max-lg:text-2xl max-xl:text-3xl xl:text-4xl  font-medium text-right opacity-60 text-gray-500 leading-snug justify-center items-center"
      style={{
        opacity: 1,
        animation: 'fadeIn 3s ease-in-out',
        
      }}
    >
      Indian Institute of Information Technology, Lucknow
      <br />
      भारतीय   सूचना   प्रौद्योगिकी   संस्थान, लखनऊ
      <br />
      <span className="float-right animate__zoomOutRight max-sm:text-xs max-md:text-lg max-lg:text-2xl max-xl:text-3xl xl:text-4xl text-gray-500">(An Institute of National Importance by the Act of Parliament)</span>
    </div>

  );
}

export default Head;
