import * as React from 'react';
import Bar from './Bar';

interface AppPropsI {
  field1: string,
  field2: string,
  activity?: string,
}

const App: React.SFC<AppPropsI> = ({field1, field2, activity}) => {
  return (
    <div>
      <p>My first career was in {field1}, but that did not work out.</p>
      <p>So I switched to {field2}</p>
      <p>Sometimes I go to {activity || 'take a nap'}.</p>
      <Bar dog="Puck"/>
    </div>
  );
}

export default App;
