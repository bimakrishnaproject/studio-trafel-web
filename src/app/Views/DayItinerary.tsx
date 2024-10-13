import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import IconSwitcher from "../components/IconSwitcher";
import "../globals.css";
import { DayByDayItineraryProps } from "../lib/types";
import { DownloadIcon } from "../components/icons";

export default function DayItinerary({
  data,
  onClick,
  toggleExpandAll,
}: DayByDayItineraryProps) {
  return (
    <div className="dynamic-padding">
      <div className="title-align">
        <h1
          className="font-bold"
          style={{ fontSize: "clamp(22px, 5vw, 48px)" }}
        >
          Day by day itinerary
        </h1>
        <p className="mt-2">
          {`${data?.length} days itinerary trip from ${data?.[0]?.city} to ${
            data?.[data?.length - 1]?.city
          } visiting 2 countries and 15 cities`}
        </p>
        <div className="mt-8 flex row justify-between">
          <div className="flex row">
            <DownloadIcon />
            <p className="font-bold text-xl ml-4" style={{ color: "#2D5A7B" }}>
              Download Itinerary
            </p>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleExpandAll}
          >
            <p className="text-xl font-bold mr-2">
              {data.every((item) => item.show)
                ? "Collapse all days"
                : "Expand all days"}
            </p>
            <ChevronDownIcon
              className={`w-8 h-8 transition-transform duration-300 ease-in-out ${
                data.every((item) => item.show) ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        {data?.map((el, i) => {
          return (
            <div
              key={i}
              className="border border-gray-300 rounded-lg relative overflow-hidden mb-5"
            >
              <div
                onClick={() => onClick(i)}
                className={`flex flex-row items-center justify-between transition-colors duration-300 ease-in-out relative overflow-hidden cursor-pointer ${
                  el.show ? "bg-gray-200" : "bg-white"
                }`}
              >
                <div className="flex flex-row items-center w-full">
                  <div className="max-w-[300px] w-full h-auto overflow-hidden hide-on-mobile">
                    <img
                      loading="lazy"
                      src={el.image.asset.url}
                      className={`w-full h-auto object-cover transition-transform duration-500 ease-in-out rounded-t-lg rounded-b-lg transform ${
                        el.show ? "translate-x-[-100%]" : "translate-x-0"
                      }`}
                    />
                  </div>

                  <div
                    className={`ml-4 mr-4 flex-grow transition-transform duration-500 ease-in-out ${
                      el.show ? "show" : ""
                    } mobile-padding`}
                    style={{
                      transform: el.show
                        ? "translateX(-280px)"
                        : "translateX(0)",
                    }}
                  >
                    <p className="text-xl">Day {i + 1}</p>
                    <div className="mt-2 mb-2">
                      <h1 className="text-xl font-bold">{el?.title}</h1>
                      <h1 className="text-xl mt-2">{el?.city}</h1>
                    </div>
                    <div className="flex flex-row hide-on-mobile">
                      {el?.moreInfo?.slice(0, 2)?.map((el, i) => {
                        return (
                          <>
                            <div key={i}>
                              <IconSwitcher title={el?.title} size={25} />
                            </div>
                            <p className="ml-4 mr-4">{el?.title}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-end p-6">
                  <h1 className="text-xl font-bold mr-2 hide-on-mobile">
                    {el.show ? "See less" : "See more"}
                  </h1>

                  <ChevronDownIcon
                    className="size-8 transition-transform duration-300 ease-in-out"
                    style={{
                      transform: el.show ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  overflow: "hidden",
                  transition: "height 0.5s ease, opacity 0.5s ease",
                  animation: el.show
                    ? "expand 0.5s forwards"
                    : "collapse 0.5s forwards",
                }}
              >
                <div className="flex row default-padding">
                  <div
                    className={`dynamic-width transition-opacity transition-transform duration-500 ease-in-out z-5 ${
                      el.show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                    }`}
                  >
                    <div className="w-full h-auto show-on-mobile mt-2 mb-6 overflow-hidden relative max-h-[500px]">
                      <img
                        loading="lazy"
                        src={el.image.asset.url}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <h1 className="text-xl font-bold hide-on-mobile">
                      Day {i + 1}
                    </h1>
                    <h1 className="text-4xl mt-4 font-bold">{el?.title}</h1>
                    <h1 className="text-xl mt-4">{el?.description}</h1>
                    <div style={{ padding: 10 }}>
                      {el?.moreInfo?.map((item, index) => (
                        <div
                          className="flex flex-row items-center mb-10 mt-10"
                          key={index}
                        >
                          <div className="mr-4">
                            <IconSwitcher title={item?.title} size={35} />
                          </div>
                          <div className="flex flex-col">
                            {" "}
                            <p className="text-xl font-bold">{item?.title}</p>
                            <p className="text-xl">{item?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full" style={{ width: "200%" }}>
                      <h1 className="text-4xl mt-4 font-bold">
                        Included and optional experiences
                      </h1>
                      <div className="mt-6 flex overflow-x-auto">
                        {el?.optionalExperience?.map((element, indexElemet) => (
                          <div className="mx-4" key={indexElemet}>
                            <div className="w-[450px] h-[200px] overflow-hidden">
                              <img
                                loading="lazy"
                                src={element.image.asset.url}
                                className="w-full h-full object-cover rounded-t-lg"
                              />
                            </div>
                            <div className="w-[450px] border border-gray-300 rounded-b-lg p-5 h-[400px] flex flex-col justify-between">
                              <div>
                                <p className="font-bold text-xl">
                                  {element?.title}
                                </p>
                                <p className="text-xl mt-4">
                                  {element?.description}
                                </p>
                                <p className="font-bold text-xl mt-4">
                                  See more
                                </p>
                              </div>
                              <div className="flex flex-row pb-2.5">
                                <CheckIcon className="size-6 mr-4 font-bold" />
                                <p className="font-bold text-xl">
                                  Included with trip
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`ml-14 md:flex hide-on-mobile relative w-full z-10 transition-opacity duration-500 ease-in-out transform ${
                      el.show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-24"
                    }`}
                  >
                    <div className="relative w-full h-auto overflow-hidden max-h-[500px]">
                      <img
                        loading="lazy"
                        src={el.image.asset.url}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
