import Navbar from '../components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text"
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const about = ({ about }) => {
  const client = createClient({
    projectId: "qbjmxhyj",
    dataset: "production",

  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(about)
  return (
    <div>
      <Navbar />

      <div className='flex w-full  min-h-[700px]'>

        <div className='w-1/4 px-5 py-10 text-center items-center flex flex-col bg-[#375F9B]'>
          {
            about.map((item, index) => {
              return (
                <div className='my-10 w-full py-3 hover:bg-white  hover:text-[#375F9B] ' key={index}>
                <Link 
                to={index}
                activeClass="active" 
                 spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}>
                <h1 className='text-3xl text-white cursor-pointer hover:text-[#375F9B]'>{item.title}</h1>
                </Link>
                </div>
              )
            })
          }
        </div>

        <div className='p-10 w-3/4'>
        <Fade duration={1500}>
        
        {
          about.map((item, index) => {
            return (
              <div id={index} className='my-12 min-h-[600px]' key={index}>
                <h1 className='text-3xl text'>{item.title}</h1>
                  <div className='my-4'>
                  <PortableText
                              content={item.description}
                              serializers={{
                              }}
                            />
                  </div>
              </div>
            )
          })
        }
        </Fade>
        </div>


        
        </div>
    
        </div>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "qbjmxhyj",
    dataset: "production",

  });
  const query = `*[_type == "about"]`;
  const about = await client.fetch(query);


  return {
    props: {
      about
    },
  };
}


export default about