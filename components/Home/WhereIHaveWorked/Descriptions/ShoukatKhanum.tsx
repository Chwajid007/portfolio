import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ShoukatKhanum() {
  const tasks = [
    {
      text: "Involved in analyzing the requirements by the client",
      keywords: ["analyzing the requirements"],
    },
    {
      text: "Designed and implemented the User Interface using Javascript, Bootstrap, HTML5, CSS3",
      keywords: [" User Interface using Javascript", "Bootstrap, HTML5, CSS3"],
    },
    {
      text: "Development was done on Agile methodology with rapid turnouts",
      keywords: ["Agile methodology"],
    },
    {
      text: "Contributed to both UI and server-side validations in the development process",
      keywords: ["UI and server-side validations"],
    },
    {
      text: "Collaborated closely with the QA team, swiftly addressing and resolving UI defects with an expedited turnaround.",
      keywords: ["QA team", "resolving UI defects"],
    },
    {
      text: " Extensively worked on DOM manipulation using ReactJs.",
      keywords: ["DOM manipulation using ReactJs"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June 2022 - August 2020
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://arsoftwareagency.com/", "_blank")
            }
          >
            arsoftwareagency.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
