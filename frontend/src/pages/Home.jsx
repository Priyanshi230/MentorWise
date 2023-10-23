import React from "react";
import hero1 from "../assets/images/hero1.png";
import hero22 from "../assets/images/hero22.png";
import hero3 from "../assets/images/hero3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/Header/About/About";
import iconn1 from "../assets/images/iconn1.png";
import icon4 from "../assets/images/icon2.jpg";
import icon3 from "../assets/images/icon3.jpg";
import icon5 from "../assets/images/icon5.png";
import icon6 from "../assets/images/icon6.png";
import  feature from "../assets/images/feature.png";
import  videoicon from "../assets/images/videoicon.png";
//import avataricon  from "../assets/images/avataricon.png";
import avatariconn from "../assets/images/avatariconn.png";
import ServiceList from "../components/Services/ServiceList";
import MentorList from "../components/Mentor/MentorList";
import faqimg from "../assets/images/faqimg.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      {/* highlight section  */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* content */}

              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Connecting Aspiring Researchers with Experienced Mentors.
                  </h1>

                  <p className="text_para">
                    Discover your academic journey's guiding star with
                    MentorWise – the ultimate platform connecting you with
                    experienced mentors and collaborators. Fuel your research
                    ambitions, find the perfect mentor, and unlock your full
                    academic potential. Join MentorWise today and embark on a
                    transformative educational experience!
                  </p>

                  <button className="btn"> Request a Meeting</button>
                </div>

                {/* hero counterr */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years Of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Institutes</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Student Satisfaction </p>
                  </div>
                </div>
              </div>
              {/* content */}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={hero1} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={hero22} alt="" className="w-full mb-[30px]" />
                  <img src={hero3} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ḥighlight section end */}

        {/* more info */}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                {" "}
                Providing The Best Guides
              </h2>
              <p className="text_para text-center">
                Unlock your research potential with our comprehensive mentorship
                and collaboration platform.
              </p>
            </div>
            {/* <div className="flex flex-wrap items-center justify-between  flex-col md:flex-row gap-5 lg:gap-[30px]
             mt-[30px] lg:mt-[55px]">

             </div> */}

            <div className="grid gris-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={iconn1} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Mentor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Discover experienced mentors who ignite your research
                    journey.
                  </p>
                  <Link
                    to="/Professor"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                    hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon6} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Discover experienced mentors who ignite your research
                    journey.
                  </p>
                  <Link
                    to="/Professor"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                    hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon5} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Schedule a Meeting
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Discover experienced mentors who ignite your research
                    journey.
                  </p>
                  <Link
                    to="/Professor"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                    mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                    hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* more info end */}

        <About />

        {/*  service section*/}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Services</h2>
              <p className="text_para text-center">
                Seamless mentorship, collaboration, and expert insights for
                aspiring researchers.
              </p>
            </div>

            <ServiceList />
          </div>
        </section>
        {/* service section end */}

        {/* feature section start */}
        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              {/* feature content */}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get Virtual Mentorship <br /> Anytime.
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule the appointement directly
                  </li>
                  <li className="text_para">
                    2. Search for your prefrable professor and contact their
                    organizations.
                  </li>
                  <li className="text_para">
                    3. View our professor who are accepting new mentees,use the
                    online scheduling tool to select a meeting time.
                  </li>
                </ul>

                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              {/* feature image */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={feature} alt="" />

                <div
                  className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 
                  lg:px-4 lg:pb-[26px] rounded-[10px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                        Tue,24
                      </p>

                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                        10:00AM
                      </p>
                    </div>

                    <span
                      className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                      bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] "
                    >
                      <img src={videoicon} alt="" />
                    </span>
                  </div>
                  <div
                    className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 
                text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                  >
                    Consultation
                  </div>
                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatariconn} alt="" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                      Wallenn Collin
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature section end */}

        {/* our great proffesors */}

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our great Mentors.</h2>
              <p className="text_para text-center">
                Guiding futures, shaping innovation, and fostering excellence.
              </p>
            </div>
            <MentorList />
          </div>
        </section>
        {/*our great professor end  */}

        {/* faq section */}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap:0">
              <div className="w-1/2 hidden md:block">
                <img src={faqimg} alt="" />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Commonly posed inquiries from students.
                </h2>

                <FaqList />
              </div>
            </div>
          </div>
        </section>
        {/* faq section end */}

        {/* testimonial start */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our Mentee say</h2>
              <p className="text_para text-center">
                Guiding futures, shaping innovation, and fostering excellence.
              </p>
            </div>
            <Testimonial />
          </div>
        </section>

        {/* testimonial end */}
      </>
    </>
  );
};

export default Home;
