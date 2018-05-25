import * as React from 'react';
import { PlaceDetails } from './utils/places';

// interface PropsI {
//   rating: number,
//   icon: string,
//   name: string,
//   url: string,
//   website?: string,
// };

export const PlaceSearchResult: React.SFC<any> = ({ id, rating, icon, name, url, vicinity, }) => {
  return (
    <div>
      <p>{id}</p>
      <img src={icon} alt="Restaurant icon."/>
      <h4>{name}</h4>
      <a href={url}>Check It Out!</a>
      <p>Rating: {rating.toString()}</p>
    </div>
  );
};
