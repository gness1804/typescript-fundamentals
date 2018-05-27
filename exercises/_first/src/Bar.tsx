
import * as React from 'react';

interface IProps {
  dog: string;
}

class Bar extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>My mom's dog was {this.props.dog}.</p>
      </div>
    );
  }
}

export default Bar;


