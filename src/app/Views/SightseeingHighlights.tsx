import { MarkerIcon } from "../components/icons";
import { SightseeingHighlightsProps } from "../lib/types";

export default function SightseeingHighlights({
  data,
}: SightseeingHighlightsProps) {
  return (
    <div className="dynamic-padding">
      <div className="title-align">
        <h1
          className="text-5xl font-bold"
          style={{ fontSize: "clamp(22px, 5vw, 48px)", fontWeight: "bold" }}
        >
          About this trip
        </h1>
      </div>
      <div className="border-b border-gray-300">
        <div className="flex flex-col lg:flex-row">
          <div className="title-align mt-6 lg:mr-12 lg:w-1/3">
            <h1 className="text-3xl font-bold" style={{ color: "#4B6B35" }}>
              Sightseeing highlights
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 lg:w-2/3 margin-top-on-mobile">
            {data?.map((el, i) => (
              <div className="flex mb-12" key={i}>
                <div>
                  <MarkerIcon color="#4B6B35" />
                </div>
                <div className="ml-4">
                  <p className="text-xl">
                    <span className="font-bold">{el?.title}</span>{" "}
                    {el?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
