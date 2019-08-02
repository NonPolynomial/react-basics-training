// Quotes.js
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

const defaultProps = {
  delay: 1500,
};

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      quotes: props.quotes,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { quotes } = this.state;
      const next = this.state.current + 1;
      this.setState({
        current: quotes[next] ? next : 0,
      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { current, quotes } = this.state;
    return <p>{quotes[current]}</p>;
  }
}

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
