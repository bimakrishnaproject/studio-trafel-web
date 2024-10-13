import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Faq({ data, toggleExpandAll, toggleShowFaq }: any) {
  return (
    <div className="dynamic-padding">
      <div className="mt-20">
        <h1
          className="text-5xl font-bold text-center md:text-left"
          style={{ fontSize: "clamp(22px, 5vw, 48px)" }}
        >
          Frequently asked questions
        </h1>
        <div className="flex justify-end items-end mt-8">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleExpandAll}
          >
            <p className="text-xl font-bold mr-2">
              {data.every((item: any) => item.show)
                ? "Collapse All"
                : "Expand All"}
            </p>
            <ChevronDownIcon
              className={`w-8 h-8 transition-transform duration-300 ease-in-out ${
                data.every((item: any) => item.show) ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <div className="mt-14 pb-12">
          {data?.map((content: any, indexContent: number) => {
            return (
              <div
                className="mb-2 cursor-pointer"
                onClick={() => toggleShowFaq(indexContent)}
                key={indexContent}
              >
                <div
                  className={`border p-5 flex justify-between items-center transition-colors duration-300 ${
                    content.show
                      ? "bg-[#2D5A7B] border-[#2D5A7B]"
                      : "bg-white border-[#d9d9d9]"
                  }`}
                >
                  <p
                    className={`text-2xl font-bold mr-6 ${
                      content.show ? "text-white" : "text-[#414141]"
                    }`}
                  >
                    {content?.ask}
                  </p>
                  <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
                    {content.show ? (
                      <div className="bg-black w-6 h-1" />
                    ) : (
                      <p className="text-3xl font-bold">+</p>
                    )}
                  </div>
                </div>
                <div
                  className={`border transition-all duration-500 overflow-hidden ${
                    content.show
                      ? "border-[#2D5A7B] py-7 px-5 opacity-100 max-h-full"
                      : "border-white max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-2xl">{content?.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
