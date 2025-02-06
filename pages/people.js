import Layout from "../components/Layout/index";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const TeamMember = ({ name, info, pictureUrl, id }) => {
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Link href={`/people/${id}`} className="flex no-underline flex-col cursor-pointer items-center border m-4 sm:p-6 rounded-xl dark:border-gray-700">
      {pictureUrl ? (
        <img
          className="object-cover rounded-xl aspect-square"
          src={urlFor(pictureUrl).url()}
          alt={name}
          width="400"
          height="500"
        />
      ) : null}
      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-black">
        {name}
      </h1>
      <p className="mt-2 text-black no-underline">{info}</p>
    </Link>
  );
};

const People = ({ people, departments, departmentName }) => {
  const filteredDepartments = departments.filter((dept) =>
    departmentName ? dept.name === departmentName : true
  );
  
  const peopleArray = [];

  const sortTheArray = () => {
    peopleArray.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    else return 1;
    });
  };

  const LayoutForFaculty = () => {
    sortTheArray();
    return <div>
      {peopleArray.map((wm) => {
        return (
          <TeamMember
            key={wm._id}
            name={wm.name}
            pictureUrl={wm.picture}
            id={wm._id}
            info={wm.post}
          />
        );
      })}
    </div>
  }

  return (
    <Layout>
      <div className="px-20">
        {filteredDepartments.map((item, index) => (
          <div className="my-12 shadow-md p-4 rounded-md duration-300" key={index}>
            <h1 className="text-3xl">{item.name}</h1>
            {item?.people?.map((it, ind) => (
              <div key={ind}>
                <h1 className="text-2xl my-4 border-b-2 border-slate-400">{it.SubDepartment}</h1>
                <div>
                  {it.people?.map((ct, num) => (
                    <div key={num}>
                      {people.map((wm) => {
                        if (wm._id === ct._ref) {
                          peopleArray.push(wm);
                          console.log(peopleArray)
                        }
                      })}
                    </div>
                  ))}
                </div>
                <div className="grid grid-flow-row md:grid-cols-4 gap-3">
                  {sortTheArray()}
                    {peopleArray.map((wm) => {
                      return (
                        <TeamMember
                          key={wm._id}
                          name={wm.name}
                          pictureUrl={wm.picture}
                          id={wm._id}
                          info={wm.post}
                        />
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { department } = context.query;
  const client = createClient({
    projectId: "t8c6d80n",
    dataset: "production",
  });
  const people = await client.fetch(`*[_type == "people"]`);
  const departments = await client.fetch(`*[_type == "departments"]`);

  console.log( "People : ", people)

  return {
    props: {
      people,
      departments,
      departmentName: department || null, // Pass the department name from the query
    },
  };
}

export default People;
