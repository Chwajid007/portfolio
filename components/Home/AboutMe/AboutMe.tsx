import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    {
      name: "Languages",
      techs: ["JavaScript", "TypeScript", "Python"],
    },
    {
      name: "Tech",
      techs: ["React Native", "Redux", "Node.js", "Express.js", "Nest.js"],
    },
    {
      name: "Databases",
      techs: ["SQL", "MongoDB", "PostgreSql"],
    },
    {
      name: "DevOps",
      techs: ["Git", "AWS", "CI/CD", "Docker", "Github Actions"],
    },
    {
      name: "Tools",
      techs: ["VS code", "XCode", "Android Studio", "Agile", "Babel"],
    },
    {
      name: "Integrations",
      techs: ["Stripe", "Paypal", "In-App Purchases", "KYC", "Firebase"],
    },
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! I&apos;m Wajid Ali Zulfiqar, a dedicated Mobile App Developer
                with over the years of experience in
                <span className="text-AAsecondary">
                  {" "}
                  React Native, JavaScript, and TypeScript
                </span>
                . I&apos;ve successfully delivered more than 10 mobile applications,
                seamlessly integrating technologies like
                <span className="text-AAsecondary">
                  {" "}
                  MongoDB, MySQL, and CI/CD pipelines
                </span>
                , which reduced deployment times by 30%. My journey also
                includes launching 3 live apps on Google Play and Apple Store,
                where I&apos;ve consistently optimized systems for peak performance
                and scalability.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                On the front end, I excel in{" "}
                <span className="text-AAsecondary">
                  {" "}
                  React Native, JavaScript, TypeScript, and Redux
                </span>
                , while my backend expertise includes{" "}
                <span className="text-AAsecondary">
                  Node.js, Express.js, and Firebase
                </span>
                . I&apos;m passionate about DevOps and cloud infrastructure, always
                aiming to push the boundaries of what’s possible.
                <br className="2xl:block hidden" />
                <br className="2xl:block hidden" />
                Beyond coding, I have a deep commitment to teamwork, whether
                it&apos;s mentoring junior developers or participating in Agile
                ceremonies. If you&apos;re looking for someone to bring your mobile
                app ideas to life with efficiency and creativity, let&apos;s
                collaborate and make it happen!
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="flex align-center gap-[10px] text-gray-400 sm:text-sm text-xs">
                          <strong>{el.name}:</strong>
                          <div className="flex align-center gap-[10px] flex-wrap">
                            {el.techs.map((tech, i) => (
                              <span
                                key={i}
                                className="text-gray-400 sm:text-sm text-xs"
                              >
                                <span className={"h-3 w-3 text-AAsecondary"}>
                                  •
                                </span>{" "}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded-full "
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded-full  overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded-full  overflow-hidden"></div>
              <Img
                src={"/wajidali.png"}
                className={"object-contain rounded-full "}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded-full   translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded-full overflow-hidden">
              <Img
                src={"/wajidali.png"}
                className={"object-contain rounded-full "}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded-full  overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
