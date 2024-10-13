import { TickIcon } from "../components/icons";
import { TravelHighlightsProps } from "../lib/types";

export default function TravelHighlights({ data }: TravelHighlightsProps) {
  return (
    <div className="dynamic-padding">
      <div className="flex flex-col lg:flex-row mt-6">
        <div className="lg:mr-12 lg:w-1/3 title-align">
          <h1 className="text-3xl font-bold mt-6" style={{ color: "#A7282E" }}>
            Travel highlights
          </h1>
          <p className="text-xl mt-2">
            Specific transfer information can be found here:
          </p>
          <div className="mt-6 flex hide-on-mobile">
            <div className="bg-red-700 p-5 lg:px-12">
              <h1 className="text-2xl font-bold text-white">
                Airport Transfers
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 lg:w-2/3 margin-top-on-mobile">
          {data?.map((el, i) => (
            <div className="flex mb-4" key={i}>
              <div>
                <TickIcon color="#A7282E" />
              </div>
              <div className="ml-4">
                <p className="text-xl">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="show-on-mobile mb-6"
          style={{
            justifyContent: "center",
          }}
        >
          <div className="mt-12 flex">
            <div
              className="p-5 lg:px-12"
              style={{ backgroundColor: "#A7282E" }}
            >
              <h1 className="text-2xl font-bold text-white">
                Airport Transfers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
