import React from "react";
import TransferIcon from "./icons/TransferIcon";
import GroupIcon from "./icons/GroupIcon";
import MoonIcon from "./icons/MoonIcon";
import TripMealsIcon from "./icons/TripMealsIcon";

const IconSwitcher = ({ title, size }) => {
  if (title?.toLowerCase().includes("transfer")) {
    return <TransferIcon size={size} />;
  } else if (title.includes("Welcome")) {
    return <GroupIcon size={size} />;
  } else if (title.includes("Accommodation")) {
    return <MoonIcon size={size} />;
  } else if (title.includes("Meals")) {
    return <TripMealsIcon size={size} />;
  } else {
    return <GroupIcon size={size} />;
  }
};

export default IconSwitcher;
