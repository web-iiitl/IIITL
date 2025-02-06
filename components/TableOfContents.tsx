"use client"
import React,{ useEffect, useState } from "react";


type Props= {
  children: string | React.JSX.Element | React.JSX.Element[]
}

type Heading = {
  id: string,
  text: string
}
export default function TableOfContents({ children }:Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const activeId='/' 
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
      })
    );
    setHeadings(elements);
  }, []);
  return (
    <>
      <input id="mobile-table" type="checkbox" className="hidden peer"></input>
      <div className="sticky max-md:fixed top-0 col-span-1 bg-bluel text-white h-screen max-md:w-full max-md:top-0 max-md:left-0 max-md:hidden max-md:peer-checked:block z-10">
        <div className="h-36 flex flex-col gap-4 justify-center items-center">
          {children}
        </div>
        <ul className="flex flex-col justify-start">
          {headings.map((heading) => {
            if (activeId === heading.id) {
              return (
                <li
                  key={heading.id}
                  className="text-center text-2xl font-medium py-6 bg-lightbg text-bluel"
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            } else {
              return (
                <li
                  key={heading.id}
                  className="text-center text-2xl font-medium  py-6"
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            }
          })}
         
        </ul>
      </div>
    </>
  );
}
