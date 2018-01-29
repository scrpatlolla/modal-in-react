import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  latestRating = () => {
    console.log("testing");
        document.querySelector('.latest').innerHTML = "test";
  };

  render() {
    return (
      <div className="App" id="tess">
        <button onClick={this.toggleModal}>
          Click Icon here
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            <ul className="block">
              <li onClick={this.latestRating} className="latest">LATEST RATING</li>
              <li>RESEARCH</li>
              <li>ISSUES</li>
              <li>SURVEILLANCE DATA</li>
              <li>RATINGS NAVIGATOR</li>
              <li>RATING HISTORY</li>
              <li>IDENTIFIERS</li>
              <li>DISCLOSURES</li>
            </ul>
        </Modal>

      </div>
    );
  }
}

export default App;
