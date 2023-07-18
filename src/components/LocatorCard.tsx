// src/components/LocationCard.tsx

import { CardComponent, CardProps } from "@yext/search-ui-react";
import * as React from "react";
import Location, { Coordinate } from "../types/locations";
import { RiDirectionFill, RiPhoneFill } from "react-icons/ri";

const LocatorCard: CardComponent<Location> = ({
  result,
}: CardProps<Location>): JSX.Element => {
  const location = result.rawData;

  // function that takes coordinates and returns a google maps link for directions
  const getGoogleMapsLink = (coordinate: Coordinate): string => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`;
  };

  return (
    <div className="flex justify-between border-y p-4">
      <div className="flex">
        <div>
          <a
            target={"_blank"}
            href={location.slug}
            className="font-semibold text-blue-900"
            rel="noreferrer"
          >
            {location.name}
          </a>
          <p className="text-sm">{location.address.line1}</p>
          <p className="text-sm">{`${location.address.city}, ${location.address.region} ${location.address.postalCode}`}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {location.yextDisplayCoordinate && (
          <a
            target={"_blank"}
            className="flex flex-col items-center text-sm text-blue-900"
            href={getGoogleMapsLink(location.yextDisplayCoordinate)}
            rel="noreferrer"
          >
            <RiDirectionFill size={24} />
            <p>Directions</p>
          </a>
        )}
        {location.mainPhone && (
          <a
            // target={"_blank"}
            className="flex flex-col items-center text-sm text-blue-900"
            href={`tel:${location.mainPhone}`}
            rel="noreferrer"
          >
            <RiPhoneFill size={24} />
            <p>Call Now</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default LocatorCard;