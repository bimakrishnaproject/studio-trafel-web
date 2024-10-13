export interface TopTourSummaryProps {
  data: {
    title: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
    travel: string;
    accommodation: string;
    meals: string;
    itinerary: string;
    tipsTitle: string;
    tipsDescription: string;
    tripCode: string;
  };
}

export interface OptionalExperience {
  image: {
    asset: {
      url: string;
    };
  };
  title: string;
  description: string;
}

export interface MoreInfo {
  title: string;
  description: string;
}

export interface ItineraryDay {
  image: {
    asset: {
      url: string;
    };
  };
  show: boolean;
  title: string;
  city: string;
  description: string;
  moreInfo: MoreInfo[];
  optionalExperience: OptionalExperience[];
}

export interface DayByDayItineraryProps {
  data: ItineraryDay[];
  onClick: (index: number) => void;
  toggleExpandAll: () => void;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface SightseeingHighlightsProps {
  data: Highlight[];
}

export interface TravelHighlight {
  description: string;
}

export interface TravelHighlightsProps {
  data: TravelHighlight[];
}

export interface DayByDayItineraryData {
  city: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  moreInfo: {
    title: string;
    description: string;
  }[];
  optionalExperience: {
    image: {
      asset: {
        url: string;
      };
    };
    title: string;
    description: string;
  }[];
  show: boolean; // Properti 'show' ditambahkan
}

export type TourData = {
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  travel: string;
  accommodation: string;
  meals: string;
  itinerary: string;
  tipsTitle: string;
  tipsDescription: string;
  tripCode: string;
};
export interface SightseeingHighlightData {
  title: string;
  description: string;
}

export interface TravelHighlightData {
  description: string;
}

export interface FaqData {
  ask: string;
  answer: string;
  show?: boolean; // Untuk toggle expand/collapse
}

interface FaqItem {
  ask: string;
  answer: string;
  show: boolean;
}

export interface FaqProps {
  data: FaqItem[];
  toggleExpandAll: () => void;
  toggleShowFaq: (index: number) => void;
}
