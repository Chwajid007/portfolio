import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import ShoukatKhanum from "./Descriptions/ShoukatKhanum";
import WebwriteIncSoftwareEngineer from "./Descriptions/WebwriteIncSoftwareEngineer";
import DigitalDynamics from "./Descriptions/DigitalDynamics";
import WebwriteIncIntern from "./Descriptions/WebwriteIncIntern";

export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "React Native Developer":
        return <WebwriteIncSoftwareEngineer />;
      case "Associate Software Engineer":
        return <DigitalDynamics />;
      case "Disaster Saver":
        return <WebwriteIncIntern />;
      case "SE Intern":
        return <ShoukatKhanum />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Webwrite Inc.");
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-7); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false, false, false, false]);
  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[170px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-11 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="React Native Dev"
            BarPosition={-7}
            BarAvobePosition={1}
            DescriptionJob="React Native Developer"
            CompanyNameBackgroundColorGreen={[
              true,
              false,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="ASE"
            BarPosition={37}
            BarAvobePosition={129}
            DescriptionJob="Associate Software Engineer"
            CompanyNameBackgroundColorGreen={[
              false,
              true,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Disaster Saver"
            BarPosition={80}
            BarAvobePosition={257}
            DescriptionJob="Disaster Saver"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              true,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="SE Intern"
            BarPosition={125}
            BarAvobePosition={385}
            DescriptionJob="SE Intern"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              true,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
