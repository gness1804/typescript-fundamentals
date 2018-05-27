
import * as React from 'react';

interface IProps {
  dog: string;
}

interface IState {
  barks: number;
}

class Bar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      barks: 0,
    };
  }

  private bark = (): void => {
    this.setState({
      barks: this.state.barks + 1,
    });
  }

  public render() {
    const { dog } = this.props;
    const { barks } = this.state;

    return (
      <div>
        <p>My mom's dog was {dog}.</p>
        <p>{dog}'s barks: {barks.toString()}.</p>
        <button onClick={this.bark}>Woof!</button>
      </div>
    );
  }
}

export default Bar;


