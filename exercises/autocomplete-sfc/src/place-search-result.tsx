import * as React from 'react';
import { PlaceDetails, ShortPlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<any> = ({ rating, icon, name, url, vicinity }) => {
  return (
    <div>
      <img src={icon} alt="Restaurant icon."/>
      <h4>{name}</h4>
      <a href={url}>Check It Out!</a>
      <p>Rating: {rating.toString()}</p>
    </div>
  );
};
