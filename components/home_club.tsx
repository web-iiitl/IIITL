import Zoom from "react-reveal/Zoom";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Container from "./Containers/index";

const HomeClub: React.FC = ({ clubs }: any) => {
  
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_CLUB_ID,
    dataset: "production",
  });

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Container>
      <Zoom>
        <div className="container mx-auto  ">
          <h1 className="text-5xl mb-4 sm:mb-10 text-bluel font-medium max-sm:text-3xl">Student Life</h1>
          <div className="grid grid-flow-row grid-cols-1 max-sm:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-3  xl:grid-cols-4  gap-10 max-sm:gap-3 max-lg:gap-6  py-3">
            {clubs?.map((item, index) => (
              <div key={index}>
                <a href={"/clubs/" + item._id}>
                  {item.picture && item.picture.length > 0 && (
                    <img
                      className="rounded-lg cursor-pointer shadow-lg max-sm:h-[110px] max-sm:w-[150px] max-lg:w-[300px]  h-[220px] w-[250px] transform transition-transform hover:scale-110"
                      src={urlFor(item.picture[0]).url()}
                      alt=""
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </Container>
  );
};

export default HomeClub;
