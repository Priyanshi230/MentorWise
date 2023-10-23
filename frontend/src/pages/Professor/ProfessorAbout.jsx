import React from "react";
import { formateDate } from "../../utils/formateDate";

const ProfessorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-heaadingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Prof. Michaek Smith
          </span>
        </h3>
        <p className="text_para">
          Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello
          jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii
          Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello
          jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii
          Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello
          jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii
          Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello
          jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii Hello jiiii
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-heaadingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("06-25-2006")} - {formateDate("07-23-2008")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Phd in Neural Networks
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              St. Pauls University,Boston.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2004")} - {formateDate("08-15-2006")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Specialization in Deep Learning
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              St. Marile University,New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-heaadingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:-p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("10-23-2008")} - {formateDate("09-20-2015")}
            

            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr.Professor
              </p>


              <p className="text-[14px] leading-6 font-medium text-textColor">
                Stephen's University New York
              </p>
            </li>


            <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("10-01-2015")} - {formateDate("07-23-2023")}

            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Professor
              </p>


              <p className="text-[14px] leading-6 font-medium text-textColor">
                Stephen's University New York
              </p>
            </li>

        </ul>
      </div>
    </div>
  );
};

export default ProfessorAbout;
