import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import ClubCarousel from "../../components/ClubCarousel";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";
import Layout from "../../components/Layout/index";

const Clubs = ({ clubs, events }) => {
  const router = useRouter();
  const id = router.query.id;

  const client = createClient({
    projectId: "msx6zvjg",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  console.log(clubs, events);

  return (
    <Layout>
      <div>
        {clubs.map((item, index) => {
          if (item._id == id) {
            return (
              <div className="px-20" key={index}>
                <Zoom>
                  <h1 className="text-7xl p-3 mt-9 font-extrabold text-bluel my-6">
                    About {item.name}
                  </h1>
                  <div className="flex ">
                    <div className="flex-1 py-5 font-extralight text-justify">
                      <p className=" text-4xl m-4 ">{item.description}</p>
                    </div>
                    <div className="flex-1 m-4">
                      <img
                        className="w-full h-full object-cover"
                        src={urlFor(item.picture[0]).url()}
                        alt={`Image of ${item.name}`}
                      />
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="">
                    <h1 className="text-3xl my-6">Events</h1>
                    {item.clubEvents?.map((it, ind) => {
                      return (
                        <div key={ind} className="cursor-pointer">
                          {events.map((ct, i) => {
                            if (ct._id == it._ref) {
                              return (
                                <div key={i}>
                                  <Link href={`/collegeevents/${ct._id}`}>
                                    <img
                                      className="inline-block"
                                      src={urlFor(ct.picture[0]).url()}
                                      alt={`Event ${i + 1}`}
                                    />
                                  </Link>
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    })}
                  </div>
                </Zoom>

            <ClubCarousel />
            <div className="mt-5">
              <h1 className="text-7xl p-3 font-extrabold text-bluel">People</h1>
              <div className="flex">
                <div className="flex-1">
                  <h1 className="text-5xl p-3 font-extrabold text-bluel my-6">Co-ordinators</h1>
                  <div className="flex">
                    <div className="flex-1 rounded flex items-center justify-center">
                      <img
                        className="rounded-full"
                        src={urlFor(item.picture[0]).url()}
                        alt={`Image of ${item.name}`}
                      />
                    </div>
                    <div className="flex-1 rounded h-full w-full flex items-center justify-center">
                      <img
                        className="rounded-full"
                        src={urlFor(item.picture[0]).url()}
                        alt={`Image of ${item.name}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 border-l-4 border-black">
                  <h1 className="text-5xl p-6 font-extrabold text-bluel my-6">Executives</h1>
                  <div className="flex flex-wrap">
                    {Array(10).fill("Name of the person").map((name, index) => (
                      <div key={index} className="text-2xl  m-5 flex-1/2">
                        <li className="list-disc">{name}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>



              </div>
            );
          }
        })}
      </div>
    </Layout>
  );
};

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
      clubs,
      events,
    },
  };
}

export default Clubs;
