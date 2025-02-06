import Layout from "../components/Layout/index.tsx";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import PortableText from "react-portable-text";
import Zoom from "react-reveal/Zoom";
import Container from "../components/Containers/index";

const admissions = ({ admissions, course }) => {
  const client = createClient({
    projectId: "10usolyp",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(admissions);
  return (
    <div>
      <Layout>
        <Zoom>
          <Container>

          <h1 className="text-2xl mb-4 sm:mb-10 text-bluel font-medium">Academic Programs Offered</h1>
           
          <p>The guiding principle of IIIT L is "Learning by Doing," a philosophy that permeates the teaching approach of the institute. In line with this ethos, there is a substantial focus on practical courses, intertwining theoretical and ethical concepts with hands-on laboratory experiences. The institute's programs are deliberately designed to be highly interdisciplinary, providing students with the flexibility to choose their specializations based on their interests and career goals.</p>
          <p>IIIT L is committed to cultivating engineers with not only theoretical knowledge but also robust design and manufacturing skills. This commitment is reflected in the curriculum, which goes beyond traditional classroom learning and incorporates practical applications.</p>
          
            <div className="grid grid-flow-row grid-cols-1 my-10 lg:grid-cols-2 gap-5">

              {
                admissions.map((item, index) => {
                  return (
                    <div className="w-full bg-gray-100 py-3 shadow-md border-spacing-1 px-3 ">
                      <div className="flex items-center gap-x-2">
                        <h2 className=" gap text-bluel font-medium text-3xl">
                          {item.title}
                        </h2>
                        <h2>
                        <svg className="h-9"  viewBox="0 0 800 800" enable-background="new 0 0 800 800" id="GUIDE" version="1.1" fill="#003b68"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M573.209,268.504l6.092,2.619c2.576,1.108,5.254,1.631,7.891,1.631c7.75,0,15.127-4.533,18.383-12.104 c4.363-10.147-0.326-21.911-10.473-26.273l-6.092-2.62c-10.148-4.363-21.91,0.326-26.273,10.473 C558.373,252.378,563.063,264.141,573.209,268.504z"></path> <path d="M748.934,428.852V313.685c0-11.046-8.953-20-20-20H386.189c-11.046,0-20,8.954-20,20s8.954,20,20,20h245.586 L386.189,439.268L94.083,313.685l292.106-125.583l131.116,56.369c10.148,4.362,21.91-0.327,26.273-10.475 c4.361-10.147-0.328-21.911-10.475-26.273l-139.015-59.766c-5.043-2.168-10.756-2.168-15.799,0L35.545,295.311 c-7.342,3.157-12.101,10.382-12.101,18.374s4.759,15.218,12.101,18.374L378.29,479.411c2.521,1.084,5.211,1.626,7.899,1.626 s5.378-0.542,7.899-1.626l188.64-81.101l0.004,138.395c-110.08,101.846-283.009,101.846-393.086-0.001l0.001-35.302 c0-11.046-8.954-20.001-20-20.001l0,0c-11.045,0-20,8.955-20,19.999l-0.001,43.873c0,5.373,2.163,10.521,6.001,14.283 c61.922,60.689,143.796,94.112,230.541,94.112c86.746,0,168.621-33.423,230.542-94.11c3.838-3.762,6.002-8.91,6.002-14.285 l-0.004-164.159l86.205-37.062v84.799c-16.293,7.572-27.623,24.086-27.623,43.204c0,19.62,14.643,71.239,47.623,71.239 c32.979,0,47.621-51.619,47.621-71.239C776.555,452.938,765.227,436.425,748.934,428.852z M728.934,497.887 c-3.885-7.633-7.623-19.427-7.623-25.831c0-4.203,3.42-7.623,7.623-7.623s7.621,3.42,7.621,7.623 C736.555,478.46,732.816,490.254,728.934,497.887z"></path> <path d="M169.648,460.571c11.046,0,20-8.954,20-20v-6.655c0-11.046-8.954-20-20-20s-20,8.954-20,20v6.655 C149.648,451.617,158.602,460.571,169.648,460.571z"></path> </g> </g></svg>
                        </h2>
                      </div>

                      <div className="gap-5 justify-center mb-4">
                      {item.course?.map((it, ind) => {
                        return (
                          <div className="text-2xl">
                            {course.map((cd, i) => {
                              if (cd._id == it._ref) {
                                return (
                                  <div className="" >
                                    <Link
                                      className=" py-4 hover:font-medium  text-xl  text-black no-underline ml-2 "
                                      href={"/course/" + cd._id}
                                    >
                                     <span className="hover:text-bluel flex items-center">
                                    
                                     {cd.title}
                                     </span>
                                    
                                    </Link>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      })}
                    </div>
                    </div>
                  )
                })
              }

            </div>


          

            
            
            <h1 className="text-2xl mb-4 sm:mb-10 text-bluel font-medium">Mode Of Admission</h1>
            <p>For B.Tech and Dual Degree (B.Tech and M.Tech) the admission is through JoSSA/CSAB based on JEE(Main) rank, M.Tech admission is through GATE, and M.Des admission is through CEED. In addition, students are also admitted through DASA and Study in India Programme.</p>
          </Container>
        </Zoom>
      </Layout>
    </div>
  );
};
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "10usolyp",
    dataset: "production",
  });
  const query = `*[_type == "admissions"]`;
  const query2 = `*[_type == "course"]`;
  const admissions = await client.fetch(query);
  const course = await client.fetch(query2);
  return {
    props: {
      admissions,
      course,
    },
  };
}

export default admissions;
