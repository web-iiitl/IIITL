import React from 'react'
import Layout from "../components/Layout/index";
import Fade from 'react-reveal/Fade';
import WhiteContainer from "../components/Containers/whiteContainer";
const directorate = () => {
  return (
    <Layout>

      <WhiteContainer>
        <div className='flex '>

         <div>
         <Fade left>
         <img
         src="https://iiitl.ac.in/wp-content/uploads/2020/07/canvas-resize-1.png"
         alt="Image"
         height="auto"
         width={2000}
         />
         </Fade>
         </div>
         

         <div className='px-10'>
         <Fade right>
         <h1>Director's  Message</h1>
         
         <p className='text-lg'>Welcome to the Indian Institute of Information Technology, Lucknow, an institute of national importance. IIITs have a tradition of producing best-in-class human resources in multi-dimensional aspects of Engineering and Management. IIIT Lucknow is an emerging institute that takes this initiative further in leaps and bounds by providing world-class education in Engineering, Technology, and Business. We have a team of best educators and industrialists who teach contemporary topics and bring real-life scenarios to the classroom. With this kind of training, our students enter the real world with full awareness and become adept in problem-solving.</p>
         <p className='text-lg'>Graduating from a college is like a venture where students invest their efforts and dreams in anticipation of a life-transforming future. It is, therefore, essential that they choose the right career path. While you consider various courses that we offer, our support team will help you make an optimal choice to achieve your goals.  Apart from the on-campus BTech., MTech. and PhD programmes, we are launching six off-campus programmes in IT and allied areas in August 2020. Besides dedicated teaching, we also promote quality research and life-long learning.</p>
         <p className='text-lg'>Our campus is based in the IT city of Lucknow which will soon be alive with multinational companies. We have invited many companies to set up their centres in our campus too and we are open to more  such collaborations in near future. We provide a conducive environment to all students and we have a zero-tolerance policy against any kind of ragging practice or gender insensitivity.</p>
         <p className='text-lg'>I invite young and aspiring individuals to connect with us. I also congratulate all the students who chose to learn further and achieve more. Cheers to all of you who took the first step to enriched experience.</p>
         <div className='font-bold text-xl my-10'>
         Dr. Arun Mohan Sherry
         <br />
         Founding Director, IIIT Lucknow
         </div>
         </Fade>
         </div>
        </div>
      </WhiteContainer>


    </Layout>
  )
}

export default directorate
