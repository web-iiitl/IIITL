import Marquee from "react-fast-marquee"

const marque = () => {
  return (
    <div className="bg-bluel text-white font-bold  p-1 ">
      <Marquee
          gradient={true}
          gradientColor={'26, 140, 184'}
          pauseOnHover={true}
        >
          <span className="inline-block h-6 w-9">
            <img src="./new.gif" alt="" />
          </span> Admissions open for PhD students.
          <span className="inline-block h-6 w-9">
            <img src="./new.gif" alt="" />
          </span>
        </Marquee>
    </div>
  )
}

export default marque
