import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  CHMapPinIcon,
  Globe,
  TripMealsIcon,
  UICalendarIcon,
} from "../components/icons";
import { TopTourSummaryProps } from "../lib/types";

export default function TopTourSummary({ data }: TopTourSummaryProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full h-[1000px] max-w-[10000px]">
          <img
            loading="lazy"
            src={data.image.asset.url}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col justify-center">
        <div className="flex items-center mb-10">
          <UICalendarIcon size={25} />
          <h1 className="ml-4 font-bold text-xl">Trip Year</h1>
          <div className="flex ml-8 border border-gray-300 rounded-lg">
            {[2024, 2025, 2026]?.map((el) => (
              <div
                key={el}
                className={`px-6 py-2 rounded-l-lg ${
                  el === 2024 ? "bg-[#2d5a7b]" : "bg-white"
                }`}
              >
                <p
                  className={`text-xl font-bold ${
                    el === 2024 ? "text-white" : "#2d5a7b"
                  }`}
                >
                  {el}
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ fontSize: "clamp(22px, 5vw, 48px)" }}
        >
          {data.title}
        </h1>
        <p className="text-xl mt-6">{data.description}</p>
        <div className="mt-6 flex">
          <div className="flex-1">
            <div className="flex items-center">
              <UICalendarIcon size={25} />
              <h1 className="ml-4 font-bold text-xl">Travel</h1>
            </div>
            <p className="text-xl mt-2 font-sans">{data.travel}</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <Globe size={25} />
              <h1 className="ml-4 font-bold text-xl">Accommodation</h1>
            </div>
            <p className="text-xl mt-2 font-sans">{data.accommodation}</p>
          </div>
        </div>
        <div className="mt-10 flex">
          <div className="flex-1">
            <div className="flex items-center">
              <TripMealsIcon size={25} />
              <h1 className="ml-4 font-bold text-xl">Meals</h1>
            </div>
            <p className="text-xl mt-2 font-sans">{data.meals}</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <CHMapPinIcon size={25} />
              <h1 className="ml-4 font-bold text-xl">Itinerary</h1>
            </div>
            <p className="text-xl mt-2 font-bold text-[#6b6b6b]">
              {data.itinerary}
            </p>
          </div>
        </div>
        <div className="mt-10 flex border border-gray-300 rounded-lg p-4 items-center">
          <div>
            <h1 className="text-xl font-bold">{data?.tipsTitle}</h1>
            <p className="mt-2 text-lg">{data?.tipsDescription}</p>
          </div>
          <ChevronRightIcon className="w-5 h-5 ml-12" />
        </div>
        <div className="mt-10 text-xl font-bold">
          <h1>Trip code: {data?.tripCode}</h1>
        </div>
      </div>
    </div>
  );
}
