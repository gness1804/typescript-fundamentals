import * as React from 'react';
import { PlaceSearchResult } from './place-search-result';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails, ShortPlaceDetails } from './utils/places';

interface IAppState {
  results: PlaceDetails[];
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      results: []
    };
  }
  async componentDidMount() {
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries('pizza');
    let results: any = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results });
  }
  render() {
    console.log('results in render:', this.state.results);
    const placeResults = this.state.results.map(pr => {
      return <PlaceSearchResult {...pr} key={pr.id}/>;
    });
    return (
      <ul className='results'>
        {placeResults}
      </ul>
    );
  }
};
