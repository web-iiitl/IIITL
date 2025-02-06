import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';

const collegeevent = ({ clubs, events }) => {
    const router = useRouter()
    const id = router.query.id
    const client = createClient({
        projectId: "msx6zvjg",
        dataset: "production",
    
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
      console.log(events)


  return (
    <div className=''> 
    <Navbar/>

    <div className='px-10 py-10'>
   
         {
            events.map((item,index)=>{
               if(id==item._id){
                return(
                    <div className='' key={index}>
                    <Zoom>
                    <h1 className='text-xl font-semibold'>
                    {item.name} 
                    </h1>
                    <div className='flex  py-10 gap-x-20 px-10 justify-center items-center '>
                    <img src={urlFor(item.picture[0])}  alt="" />
                    <div className='w-1/2'>
                    {item.description}
                    </div>
                    </div>
                    <h1 className='text-xl font-semibold'>
                    {'Realted CLub'} 
                    </h1>
                     <div className='grid grid-flow-row grid-cols-3 my-10'>
                      {
                        item.club.map((it,ind)=>{
                            return(
                                <div key={ind}>
                                 {
                                    clubs.map((ct,i)=>{
                                        if(it._ref==ct._id){
                                            return(
                                                <div key={i}>
                                                <Link href={'/clubs/'+ct._id}>
                                                <img src={urlFor(ct.picture[0])} alt="" />
                                                </Link>
                                                </div>
                                            )
                                        }
                                    })
                                 }
                                </div>
                            )
                        })
                      }
                     </div>
                    </Zoom>
                    </div>
                )
               }
            })
         }

        
    
    </div>

       
    </div>
  )
}
export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "msx6zvjg",
      dataset: "production",
  
    });
    const query = `*[_type == "clubs"]`;
    const query2 = `*[_type == "events"]`;
    const clubs = await client.fetch(query);
    const events = await client.fetch(query2);
  
    return {
      props: {
        clubs, events
      },
    };
  }

  

export default collegeevent
