import Header from './Header';
import Fixtures from './fixtures';
import '../style.css';

const React = window.React;

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      num: 99
    };
  }

  componentDidMount() {
    this.setState((state) => {
      return { num: state.num + 2 };
    });
    // debugger;
    alert('AppClass');
  }

  render() {
    return (
      <div>
        <Header />
        <Fixtures />
      </div>
    );
  }
}

export default App;
