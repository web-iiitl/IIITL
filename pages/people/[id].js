import Layout from "../../components/Layout/index";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import { Link } from "react-scroll";

const people = ({ people }) => {
  const router = useRouter();
  const id = router.query.id;

  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(people);
  return (
    <div>
      <Layout>

      {people.map((it, index) => {
        if (it._id == id) {
          return (
            <div key={index} className="flex w-full min-h-[400px]">
              <div className="w-1/4 px-5 py-4 text-center flex flex-col bg-[#375F9B] scroll-m-10">
                <div className="sticky top-0">
                  <img
                    src={urlFor(it.picture)}
                    className="max-w-[200px] rounded-full"
                    alt=""
                    />
                  <h2 className="my-3 mb-10 text-2xl text-white font-semibold">
                    {`${it.name}`}
                  </h2>
                  <span className="text-white text-xl font-medium">{`(${it.post})`}</span>
                  <div className="h-[500px] overflow-x-hidden overflow-y-auto my-3">
                    {it.qualifications.map((item, ind) => (
                      <button
                      key={ind}
                      className="py-3  bg-[#426ca9] text-white hover:font-black w-full font-medium text-xl  my-2 shadow-sm hover:scale-105 rounded-md duration-300"
                      >
                        <Link
                          to={item.title}
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={70}
                          className="text-inherit no-underline"
                          >
                          {item.title}
                        </Link>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-2 flex-grow">
                {it.qualifications.map((item, ind) => (
                  <div key={ind} id={item.title}>
                    <h2 className="font-serif lg:text-3xl text-bluel md:text-5xl px-10 pt-5 sm:text-4xl max-sm:text-2xl border-b-2 border-gray-400 font-semibold">
                      {item.title}
                    </h2>
                    <div className="px-10 py-4 text-xl">
                      <PortableText content={item.text} serializers={{}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const query = `*[_type == "people"]`;
  const people = await client.fetch(query);

  return {
    props: {
      people,
    },
  };
}

export default people;