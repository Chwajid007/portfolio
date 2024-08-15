import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function WebwriteIncIntern() {
  const tasks = [
    {
      text: "Engaged in scrutinizing supervisor and panel feedback to analyze project requirements effectively",
      keywords: ["scrutinizing", "panel feedback"],
    },
    {
      text: "Designed and implemented user interface using react native cli.",
      keywords: ["react native cli"],
    },
    {
      text: "Engaged proactively in Agile daily scrum, planning meetings, backlog grooming, and sprint retrospectives",
      keywords: [
        "Agile daily scrum",
        "backlog grooming",
        "sprint retrospectives",
      ],
    },
    {
      text: "Implemented and managed a Firebase Cloud Database, efficiently handling distributed data sourced from the app",
      keywords: ["Firebase Cloud Database", "distributed dat"],
    },
    {
      text: "Implemented efficient deep linking in app using react native libraries, ensuring smooth navigation and cohesive user experiences",
      keywords: [
        "deep linking",
        "react native libraries",
        "cohesive user experiences",
      ],
    },
    {
      text: "Good understanding and usage of states and props",
      keywords: ["states and props"],
    },
    {
      text: "Utilized Firebase SDK to seamlessly integrate RESTful APIs, enhancing communication within the app",
      keywords: ["Firebase SDK", "RESTful APIs"],
    },
    {
      text: "Utilized React Redux for transient app state",
      keywords: ["React Redux"],
    },
    {
      text: "Customized the react native geo-location library for getting user live location",
      keywords: ["react native geo-location"],
    },
    {
      text: "Implemented push notifications using firebase and wrote unit test cases using Junit for forntend",
      keywords: ["push notifications", "firebase", "wrote unit test cases"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Disaster Saver (FYP)
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Aug 2022 – June 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.nu.edu.pk", "_blank")}
          >
            nu.edu.pk
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
