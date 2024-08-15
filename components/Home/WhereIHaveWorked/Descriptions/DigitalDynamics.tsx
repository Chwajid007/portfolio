import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DigitalDynamics() {
  const tasks = [
    {
      text: "Developed and maintained mobile applications for clients in various industries, including fitness, healthcare, and finance.",
      keywords: ["mobile applications", "fitness, healthcare, and finance"],
    },
    {
      text: "Actively implemented new SDKs, APIs, and other third-party services into the application while ensuring that all security protocols were met throughout the process.",
      keywords: ["new SDKs, APIs", "security protocols were met"],
    },
    {
      text: "Built reusable code structure, components and front-end libraries for future use, reducing development time for new projects.",
      keywords: ["code structure, components and front-end libraries"],
    },
    {
      text: "Integrated REST API endpoints into existing web applications, allowing seamless data transfer across multiple platforms while reducing development time by 25%.",
      keywords: ["REST API", "web applications", "by 25%"],
    },
    {
      text: "Enforced HIPAA compliance (medical apps) and robust authentications (OAuth, JWT, MFA) for improved security.",
      keywords: [
        "HIPAA compliance",
        "robust authentications (OAuth, JWT, MFA)",
      ],
    },
    {
      text: "Participated in Agile/Scrum ceremonies and contributed to sprint planning, daily stand-ups, and retrospectives",
      keywords: ["Agile/Scrum", "sprint planning", "retrospectives"],
    },
    {
      text: "Developed a personalized meal planner for fitness apps, enabling users to align nutrition with their fitness goals, thereby enhancing engagement and outcomes",
      keywords: ["meal planner for fitness apps", "nnutrition", "goals"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate Software Engineer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Aug 2023 - Dec 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://webwrite.co/", "_blank")}
          >
            webwrite.co
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
