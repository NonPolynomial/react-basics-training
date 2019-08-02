// Quotes.js
import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      quotes: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, eum?',
        'Nostrum, natus a. Repellat est dolor id error delectus molestias.',
        'Nemo doloribus totam inventore commodi at cupiditate amet modi quia.',
        'Quisquam ut a ea dignissimos dolorem magni harum hic voluptatibus!',
        'Enim eaque quis amet autem error ipsa, exercitationem dignissimos tenetur?',
      ],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { quotes } = this.state;
      const next = this.state.current + 1;
      this.setState({
        current: quotes[next] ? next : 0,
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { current, quotes } = this.state;
    return <p>{quotes[current]}</p>;
  }
}

export default Quotes;
