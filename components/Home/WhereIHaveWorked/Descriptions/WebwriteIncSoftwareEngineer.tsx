import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function WebwriteIncSoftwareEngineer() {
  const tasks = [
    {
      text: "Troubleshot and resolved issues in existing React Native applications by debugging code and identifying effective solutions.",
      keywords: [
        "React Native applications",
        "debugging code",
        "effective solutions",
      ],
    },
    {
      text: "Implemented Socket.io for real-time end to end chat and groups chat in 2 apps, and integrated ChatGPT bots into 3 apps.",
      keywords: [
        "Socket.io",
        "real-time end to end chat",
        "2 apps",
        "ChatGPT bots into 3 apps",
      ],
    },
    {
      text: "Integrated payment methods (Stripe, Paypal), in-app purchases and KYC verification in more than 2 apps, collaborating with backend developers to streamline payment methods and ensure secure transactions.",
      keywords: [
        "payment methods (Stripe, Paypal)",
        "in-app purchases",
        "KYC verification",
        "2 apps",
      ],
    },
    {
      text: "Resolved compatibility issues between the back-end APIs and front-end UI components while ensuring maximum optimization of app speed which improved loading times.",
      keywords: ["back-end APIs", "front-end UI components"],
    },
    {
      text: "Implemented phone and video consultations using Twilio, later transitioning to WebRTC for enhanced performance and flexibility",
      keywords: ["phone and video consultations", "Twilio", "WebRTC"],
    },
    {
      text: "Implemented automated test cases and continuous integration (CI/CD pipelines) to streamline the development process and ensure code quality.",
      keywords: ["continuous integration (CI/CD pipelines)", "code quality"],
    },
    {
      text: "Mentored two junior developers in best practices involving UI/UX design principles as well as React Native’s components and APIs to ensure high-quality work output from team members",
      keywords: ["two junior developers", "UI/UX design principles"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            React Native Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2023 - May 2024
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
