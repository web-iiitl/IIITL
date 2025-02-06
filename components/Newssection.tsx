
import Zoom from 'react-reveal/Zoom';

const NewsSection: React.FC = () => {
  return (
    <>
    <Zoom>
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-3xl font-semibold mb-5 items-center">News Section</h2>
      <div className="flex gap-4">
        <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[400px] transform transition-transform hover:scale-110">
          <h2 className="text-xl mb-2 bg-blue-800 text-white p-2 rounded">Article 1</h2>
          <p>Content for Article 1</p>
        </div>
        <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[400px] transform transition-transform hover:scale-110">
          <h2 className="text-xl mb-2 bg-blue-800 text-white p-2 rounded">Article 2</h2>
          <p>Content for Article 2</p>
        </div>
        <div className="w-1/3 p-10 bg-white rounded-lg shadow-lg h-[400px] transform transition-transform hover:scale-110">
          <h2 className="text-xl mb-2 bg-blue-800 text-white p-2 rounded">Article 3</h2>
          <p>Content for Article 3</p>
        </div>
      </div>
    </div>
    </Zoom>
    </>
  );
};

export default NewsSection;