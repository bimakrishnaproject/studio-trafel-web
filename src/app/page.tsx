// app/home/page.js
"use client"; // Tambahkan ini
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import "./globals.css";
import {
  getDataDayByDayItinerary,
  getDataFaq,
  getDataSightseeingHighlights,
  getDataTopTourSummary,
  getDataTravelHighlights,
} from "./lib/API";
import {
  DayItinerary,
  Faq,
  SightseeingHighlights,
  TopTourSummary,
  TravelHighlights,
} from "./Views";
import {
  DayByDayItineraryData,
  FaqData,
  SightseeingHighlightData,
  TourData,
  TravelHighlightData,
} from "./lib/types";

export default function Home() {
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [dayByDayData, setDayByDayData] = useState<DayByDayItineraryData[]>([]);
  const [sightseeingHighlightsData, setSightseeingHighlightsData] = useState<
    SightseeingHighlightData[]
  >([]);
  const [travelHighlightsData, setTravelHighlightsData] = useState<
    TravelHighlightData[]
  >([]);
  const [faqsData, setFaqsData] = useState<FaqData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedTourData = await getDataTopTourSummary();
      const initialDayByDayData = await getDataDayByDayItinerary();
      const initialSightseeingHighlightsData =
        await getDataSightseeingHighlights();
      const initialTravelHighlightsData = await getDataTravelHighlights();
      const initialFaqData = await getDataFaq();

      setTourData(fetchedTourData);
      setDayByDayData(initialDayByDayData);
      setSightseeingHighlightsData(initialSightseeingHighlightsData);
      setTravelHighlightsData(initialTravelHighlightsData);
      setFaqsData(initialFaqData);
    }

    fetchData();
  }, []);

  const toggleShow = useCallback((index: number) => {
    setDayByDayData((prevData) => {
      return prevData.map((item, i) =>
        i === index ? { ...item, show: !item.show } : item
      );
    });
  }, []);

  const toggleShowFaq = useCallback((index: number) => {
    setFaqsData((prevData) => {
      return prevData.map((item, i) =>
        i === index ? { ...item, show: !item.show } : item
      );
    });
  }, []);

  const toggleExpandAll = useCallback(
    (type?: string) => {
      if (type === "day") {
        const allExpanded = dayByDayData.every((item) => item.show);
        setDayByDayData((prevData) => {
          return prevData.map((item) => ({
            ...item,
            show: allExpanded ? false : true,
          }));
        });
      } else {
        const allExpanded = faqsData.every((item) => item.show);
        setFaqsData((prevData) => {
          return prevData.map((item) => ({
            ...item,
            show: allExpanded ? false : true,
          }));
        });
      }
    },
    [faqsData, dayByDayData]
  );

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{tourData.title}</title>
        <meta name="description" content={tourData.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@700&family=Noto+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TopTourSummary data={tourData} />
      <DayItinerary
        data={dayByDayData}
        onClick={(index: number) => toggleShow(index)}
        toggleExpandAll={() => toggleExpandAll("day")}
      />
      <SightseeingHighlights data={sightseeingHighlightsData} />
      <TravelHighlights data={travelHighlightsData} />
      <Faq
        data={faqsData}
        toggleExpandAll={toggleExpandAll}
        toggleShowFaq={(index: number) => toggleShowFaq(index)}
      />
    </div>
  );
}
