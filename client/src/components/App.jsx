import React from 'react';
import axios from 'axios';

console.log('hello app');

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      hotels: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const hotels = [...this.state.hotels];
    axios.get('/api/photos')
    .then(response => {
      console.log('response data:', response.data);
      this.setState({hotels: response.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Hello App</div>
    )
  }
}

export default App;