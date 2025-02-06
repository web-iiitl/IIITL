import ControlledCarousel from "../components/Carousel";
import { useState, useEffect } from "react";
import Layout from "../components/Layout/index";
import Fade from 'react-reveal/Fade';
import WhiteContainer from "../components/Containers/whiteContainer";
import Container from "../components/Containers";
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from 'react-reveal/Zoom';
import { createClient } from "next-sanity";
import HomeClub from '../components/home_club'
import imageUrlBuilder from "@sanity/image-url";



const About = () => {
  return (
    <WhiteContainer  >
      <div className=" min-h-[60vh]  scrollAnim xl:flex flex-row xl:space-y-28 lg:space-y-20 max-sm:space-y-10 max-lg:space-y-10 ">
        <Fade left>
          <div className="xl:w-[50%] lg:w-[100%]   xl:pr-10    max-md:text-xl text-2xl font-normal gap-10 ">
            <h1 className="text-5xl mb-10 max-sm:mb-3 text-bluel max-sm:text-3xl font-medium">ABOUT  IIIT LUCKNOW</h1>
            <p className=" font-extralight text-xl max-sm:text-sm">
              Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is one of the 20 IIITs being set up by the Central Government in Public Private Partnership (PPP) mode. IIIT Lucknow admitted its first batch of B. Tech. in Information Technology with an intake of 50 students w.e.f. the academic session 2015-16. <span className="hidden md:block"> It currently offers all the amenities ,academic and non-academic to its students that can help them flourish and serve the nation with all their apprehension in the various fields of technology. The admission is made through central counselling of candidates who qualify in JEE (Mains). </span>
            </p>
            {<p className=" font-extralight text-xl hidden lg:block">
              The Institute is being set up with the financial contributions of MHRD, Govt. of India, Govt. of Uttar Pradesh, and U. P. Electronics Corporation Ltd. as industry partners. The mission of IIIT Lucknow is to be a unique and world class nucleating “Apex Center of Excellence” in the area of Information Technology so as to enhance India’s Technological strength in Information Technology . IIIT seeks to derive its strength from a linkage with sound Indian traditions of centuries past, and sets out to create knowledge-based resources in regional languages.
            </p>}
            <div className="">
              <a
                href="/about"
                className="group relative inline-flex items-center justify-center sm:p-3 sm:px-6 sm:py-2 max-sm:p-1 max-sm:px-3 max-sm:py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Read More
                </span>
                <span className="relative invisible text-xl">Read More</span>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="xl:w-[50%] w-[100%] justify-center self-center relative top-[-10px]">
            <img
              src="https://img.collegepravesh.com/2021/11/IIIT-Lucknow.jpg"
              alt="Image"
              width="100%"
              height="auto"
              style={{ filter: "blur(1px)" }}
              className="rounded-lg w-[100%] max-sm:h-[200px]"
            />
            <iframe
              width="80%"
              height="400"
              src="https://www.youtube.com/embed/EsMveuajWxo?si=xymokVk7EBppFlcJ"
              title="YouTube Video"
              className="absolute max-sm:translate-y-[-200px] translate-y-[-120px] max-lg:translate-y-[-350px] max-lg:h-[300px] max-sm:translate-x-3 xl:translate-y-[-400px] max-sm:h-[180px] lg:translate-y-[-500px]  translate-x-[30px] w-[90%] xl:h-[450px] lg:h-[500px] h-[100px] rounded-lg"
            ></iframe>
          </div>
        </Fade>
      </div>
    </WhiteContainer>
  );
};




const Statistics = () => {
  return (
    <div>
      <Fade left>
        <Container>

          <Parallax bgImage="https://images.shiksha.com/mediadata/images/1609328511phpF7Rjbe.jpeg" bgImageAlt="the cat" strength={600}
            className="bg-cover bg-center max-sm:h-[250px] max-md:rounded-lg flex justify-center items-center text-5xl text-white"

            >
          
            <div className="h-[400px] py-10  flex justify-center xl:gap-x-80 max-xl:gap-x-48 max-lg:gap-x-32 max-sm:gap-x-10  items-center text-5xl text-white">

              <div className="flex flex-col items-center ">

                <h5 className="font-bold text-6xl flex gap-x-2 max-sm:text-xl max-lg:text-5xl">
                  <CountUp end={2000} duration={2} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h5>
                <h5 className="my-4">
                  STUDENTS
                </h5>
              </div>

              <div className="flex flex-col items-center">
                <h5 className="font-bold text-6xl flex gap-x-2 max-sm:text-xl max-lg:text-5xl">
                  <CountUp end={50} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h5>
                <h5 className="my-4 capitalize">
                  FACULTY
                </h5>
              </div>


              <div className="flex flex-col items-center ">
                <h5 className="font-bold text-6xl flex gap-x-2 max-sm:text-xl max-lg:text-5xl">
                  <CountUp end={100} duration={2} >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h5>
                <h5 className="my-4">
                  STAFF
                </h5>


              </div>


            </div>
          </Parallax>

        </Container>
      </Fade>
    </div>
  )
}

const DirectorsCorner = () => {
  return (

    <WhiteContainer>
      <div className="flex flex-col sm:flex-row justify-between ">
        <Fade left>
          <div className="w-full sm:w-[50%] max-lg:w-[75%] max-sm:w-[100%] max-md:text-xl text-2xl font-normal  sm:p-6 gap-4 sm:gap-10 mb-4 sm:mb-0 flex-1 ">
            <h1 className="text-5xl mb-3 sm:mb-10 text-bluel font-medium max-sm:text-3xl">DIRECTOR'S CORNER</h1>

            <p className="text-left font-extralight text-xl max-sm:text-sm">
              Welcome to the Indian Institute of Information Technology, Lucknow, an institute of national importance. IIITs have a tradition of producing best-in-class human resources in IT and connecting multi-dimensional aspects of IT such as manufacturing, design, and management.
            </p>

            <div className="mt-4 sm:mt-10">
              <a
                href="/directorate"
                className="group relative inline-flex items-center justify-center sm:p-3 sm:px-6 sm:py-2 max-sm:p-1 max-sm:px-3 max-sm:py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">

                  Read More
                </span>

                <span className="relative invisible">Read More</span>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="flex-1 w-full  mb-4  ">
            <img
              src="https://iiitl.ac.in/wp-content/uploads/2020/07/canvas-resize-1.png"
              alt="Image"
              height="auto"
              style={{ filter: "blur(1px)" }}
              className="rounded-lg w-[100%] max-sm:h-[200px] "
            />
          </div>
        </Fade>
      </div>
    </WhiteContainer>

  )
}


const NewsSection = ({ news, annoucements }) => {
 
  const client = createClient({
    projectId: "bdnunqwq",
    dataset: "production",

  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
   
     <Container>
     <h1 className="text-5xl sm:mb-10 text-bluel font-medium max-sm:text-3xl">Latest from campus</h1>
   
      <div className="my-10 grid grid-flow-row grid-cols-1  gap-x-20 gap-y-10   lg:grid-cols-2 ">

        <Zoom>

          <div className="  p-12 max-sm:p-2 max-sm:pb-3 border-t-bluel border-t-[7px]  rounded-lg   shadow-xl">
            <div className="p-2 text-white absolute top-[-15px] left-2   rounded-full bg-bluel inline-block">
            <svg  className="h-6 w-6 max-sm:h-4 max-sm:w-4" viewBox="0 0 32 32" version="1.1"   fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M9.069 2.672v14.928h-6.397c0 0 0 6.589 0 8.718s1.983 3.010 3.452 3.010c1.469 0 16.26 0 20.006 0 1.616 0 3.199-1.572 3.199-3.199 0-1.175 0-23.457 0-23.457h-20.259zM6.124 28.262c-0.664 0-2.385-0.349-2.385-1.944v-7.652h5.331v7.192c0 0.714-0.933 2.404-2.404 2.404h-0.542zM28.262 26.129c0 1.036-1.096 2.133-2.133 2.133h-17.113c0.718-0.748 1.119-1.731 1.119-2.404v-22.12h18.126v22.391z" fill="#000000"> </path> <path d="M12.268 5.871h13.861v1.066h-13.861v-1.066z" fill="#000000"> </path> <path d="M12.268 20.265h13.861v1.066h-13.861v-1.066z" fill="#000000"> </path> <path d="M12.268 23.997h13.861v1.066h-13.861v-1.066z" fill="#000000"> </path> <path d="M26.129 9.602h-13.861v7.997h13.861v-7.997zM25.063 16.533h-11.729v-5.864h11.729v5.864z" fill="#000000"> </path> </g></svg>
            </div>
            <h4 className="text-bluel font-semibold max-sm:text-center">News</h4>
            <div>
               {
                news.map((item,index)=>{
                  return(
                    <a key={index} target="__blank" className=" px-1 py-1 hover:bg-white block my-2 bg-[#f3f3f3] decoration-none text-black no-underline"  href={item.link}> 
                    {item.name}
                    </a>
                  )
                })
               }
            </div>
            <a
            href="/news"
            className="group mt-10 max-sm:mt-5 relative inline-flex items-center justify-center sm:p-3 sm:px-6 sm:py-2 max-sm:p-1 max-sm:px-3 max-sm:py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease ">

              View All
            </span>

            <span className="relative invisible">Read More</span>
          </a>
          </div>

        </Zoom>

        <Zoom>

          <div className="  p-10 max-sm:p-2 max-sm:pb-3 border-t-bluel border-t-[7px]  rounded-lg   shadow-xl">
            <div className="p-2 text-white absolute top-[-15px] left-2 rounded-full bg-bluel inline-block">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 max-sm:h-4 max-sm:w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path></svg>
            </div>
            <h4 className="text-bluel font-semibold max-sm:text-center">Announcements</h4>
            <div>
               {
                annoucements.map((item,index)=>{
                  return(
                    <div key={index} className=" px-1 py-1 hover:bg-white block my-2 bg-[#f3f3f3] decoration-none text-black no-underline"  > 
                    {item.title}
                    </div>
                  )
                })
               }
            </div>
            <a
            href="/news"
            className="group mt-10 max-sm:mt-5 relative inline-flex items-center justify-center sm:p-3 sm:px-6 sm:py-2 max-sm:p-1 max-sm:px-3 max-sm:py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">

              View All
            </span>

            <span className="relative invisible">Read More</span>
          </a>  

          </div>

        </Zoom>


      </div>
      </Container>
  );
};

const Home = ({ news, annoucements,clubs }) => {

  
  return (

    <Layout style={{overflowY: "scroll"}}>
      <ControlledCarousel />
      <About />
      <Statistics />
      <DirectorsCorner />
      <HomeClub clubs={clubs} />
      <NewsSection news={news} annoucements={annoucements} />
    </Layout>

  );
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "bdnunqwq",
    dataset: "production",

  });
  const client2 = createClient({
    projectId: "msx6zvjg",
    dataset: "production",
  });
  const query = `*[_type == "news"]`;
  const query2 = `*[_type == "annoucements"]`;
  const news = await client.fetch(query);
  const annoucements = await client.fetch(query2);

  const query3 = `*[_type == "clubs"]`;
  const clubs = await client2.fetch(query3);


  return {
    props: {
      news, annoucements,clubs
    },
  };
}

export default Home
