import React from 'react';
import about2 from "../../../assets/images/about2.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}

          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={about2} alt="" />

            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src="" alt="" />
            </div>
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Guiding Future Scholars Toward Success.</h2>
            <p className="text_para mt-[30px]">
              With over 30 years of dedicated research and expertise in cryptography
              algorithms, I'm passionate about safeguarding data in the digital
              age. As a seasoned professor at Boston University, I've
              had the privilege of sharing my knowledge with countless students.
              My work has contributed to the development of cutting-edge
              encryption techniques. Join me in the journey to secure
              information for a safer future.
            </p>

            <Link to ="/"><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About
