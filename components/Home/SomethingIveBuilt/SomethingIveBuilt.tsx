import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://fightlife.com" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img
                src="/fightlife.png"
                alt="Project Screen shot"
                className="w-full rounded h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="px-8 w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <Img
                  src="/fightlife.png"
                  alt="Project Screen shot"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://fightlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    FightLife
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Developed a feature-rich fitness app with{" "}
                  <span className="text-AAsecondary">workout tracking</span>,
                  <span className="text-AAsecondary">in-app messaging</span>,{" "}
                  <span className="text-AAsecondary">
                    dynamic progress tracking
                  </span>
                  , and{" "}
                  <span className="text-AAsecondary">secure payments</span> for
                  enhanced user experience and communication.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Fitness App</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Stripe</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <a
                  href="https://fightlife.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://coachme.com" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img
                src="/coachme.png"
                alt="Project Screen shot"
                className="w-full rounded h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="px-8 w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <Img
                  src="/coachme.png"
                  alt="Project Screen shot"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://coachme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Coach Me
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Designed a{" "}
                  <span className="text-AAsecondary">
                    personalized fitness app
                  </span>{" "}
                  with{" "}
                  <span className="text-AAsecondary">
                    real-time activity tracking
                  </span>{" "}
                  and <span className="text-AAsecondary">diet management</span>.
                  Integrated with{" "}
                  <span className="text-AAsecondary">wearable devices</span> and
                  utilized{" "}
                  <span className="text-AAsecondary">
                    AI-driven recommendations
                  </span>{" "}
                  for users and coaches.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Fitness App</span>
                <span className="pr-4 z-10">Wearable Tech</span>
                <span className="pr-4 z-10">AI Integration</span>
                <span className="pr-4 z-10">React.js</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <a href="https://coachme.com" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a
                href="https://clinicalapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img
                src="/clinicalapp.png"
                alt="Project Screen shot"
                className="w-full rounded h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="px-8 w-full h-full bg-opacity-70 z-0 md:w-0 md:h-0">
              <div className="relative w-full h-full">
                <Img
                  src="/clinicalapp.png"
                  alt="Project Screen shot"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://clinicalapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Clinical App
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Developed a{" "}
                  <span className="text-AAsecondary">
                    HIPAA-compliant telehealth platform
                  </span>{" "}
                  with{" "}
                  <span className="text-AAsecondary">
                    role-based access control
                  </span>
                  . Enabled{" "}
                  <span className="text-AAsecondary">patient management</span>{" "}
                  and{" "}
                  <span className="text-AAsecondary">
                    appointment scheduling
                  </span>{" "}
                  for receptionists, while empowering doctors to{" "}
                  <span className="text-AAsecondary">add procedures</span> and{" "}
                  <span className="text-AAsecondary">
                    generate comprehensive reports
                  </span>
                  .
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">HIPAA Compliance</span>
                <span className="pr-4 z-10">Role-Based Access</span>
                <span className="pr-4 z-10">Telehealth</span>
                <span className="pr-4 z-10">Patient Management</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <a
                  href="https://clinicalapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
