import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bluel">

      <div className="flex flex-col sm:flex-row justify-center border-b border-dotted border-gray-400">

        <div className="w-full font-bold flex justify-center flex-col items-center gap-1 sm:w-2/6 p-4 text-white text-center sm:text-left">
          <Image src="/iiitlLogo.png" alt="Image" width={120} height={160} className="brightness-0 invert" />
          <p>Indian Institute of Information Technology, Lucknow</p>
          <p>R22F+8JR, Chak Ganjaria, C. G. City, Ahmamau, Uttar Pradesh 226002, IN.</p>
        </div>


       
      

      </div>
      <div className="container p-1 text-white font-bold mt-4 py- text-center  ">
        <p>&copy; 2023 Indian Institute of Information Technology Lucknow. All rights reserved.</p>
      </div>


    </footer>
  );
};

export default Footer;
