import React, { Component } from 'react';
import { render } from 'react-dom';

function connect(mapStateToProps) {
  const props = mapStateToProps();
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      render() {
        return (
          <WrappedComponent {...props} />
        );
      }
    }
    return Connect;
  }
}

@connect(() => {
  return {
    title: 'babel-decorator-example',
  }
})
class App extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{ title }</h2>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('main'));
