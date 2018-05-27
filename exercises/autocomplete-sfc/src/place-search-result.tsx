import * as React from 'react';
import { PlaceDetails } from '../../autocomplete-3/src/utils/places';

export const PlaceSearchResult: React.SFC<any> = (pd: PlaceDetails) => {
  const { name, icon, url, vicinity, website } = pd;

  const websiteElem = (<a
    href={website}
    target="_blank"
  >
    Website
  </a>);

  return (
   <li
    className="search-result"
  >
  <img
    className="icon"
    src={icon}
  />
  <h3>
    {name}
  </h3>
    <a
      href={url}
      target="_blank"
    >
      {vicinity}
    </a>
      ---  
    {website ? websiteElem : <p>This location does not yet have a website.</p>}
</li>
  );
};
