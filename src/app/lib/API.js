import client from "./sanityClient";

export async function getDataTopTourSummary() {
  const query = `*[_type == "topTourSummary"][0]{
      title,
      description,
      image {
        asset -> {
          url
        }
      },
      travel,
      accommodation,
      meals,
      itinerary,
      tipsTitle,
      tipsDescription,
      tripCode
    }`;

  const data = await client.fetch(query);
  return data;
}

export async function getDataDayByDayItinerary() {
  const query = `*[_type == "dayByDayItinerary"]{
      city,
      title,
      description,
      image {
        asset -> {
          url
        }
      },
      moreInfo[] {
        title,
        description
      },
      optionalExperience[] {
        image {
          asset -> {
            url
          }
        },
        title,
        description
      }
    }`;

  const data = await client.fetch(query);

  const updatedData = data.map((item) => ({
    ...item,
    show: false,
  }));

  return updatedData;
}

export async function getDataSightseeingHighlights() {
  const query = `*[_type == "sightseeingHighlights"]{
      title,
      description,
    }`;

  const data = await client.fetch(query);
  return data;
}

export async function getDataTravelHighlights() {
  const query = `*[_type == "travelHighlights"]{
      description,
    }`;

  const data = await client.fetch(query);
  return data;
}

export async function getDataFaq() {
  const query = `*[_type == "faq"]{
      ask,
      answer
    }`;

  const data = await client.fetch(query);
  const updatedData = data.map((item) => ({
    ...item,
    show: false,
  }));

  return updatedData;
}
