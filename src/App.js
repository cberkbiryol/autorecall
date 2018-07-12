import React from 'react';
import Jumbo from "./components/Jumbo";
import BodyContainer from "./components/BodyContainer";
import CarBox from "./components/CarBox";
import Footer from "./components/Footer";
import './App.css';
import cars from './cars.json';

class App extends React.Component {
  state = {
    cars: cars,
    score: 0,
    msg: "Start Playing!"
  };

  ShuffleCars = () => {
    let array = this.state.cars;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
      cars: array
    })
  }

  check = (clicked, id) => {
    if (!clicked) {
      if (this.state.score === 11) {
        this.setState({
          score: 0,
          msg: "You Win! Click to start Again!",
        })
        this.resetAll()
      } else {
        this.setState({
          score: this.state.score + 1,
          msg: "Well Done!",
        })
        this.updateOne(id)
      }
      
    } else {
      this.setState({
        score: 0,
        msg: "Nope! You have clicked it before... Start Again!"
      })
      this.resetAll()
    }
    this.ShuffleCars();
  }

  updateOne = (id) => {
    let array = this.state.cars.forEach(e => {
      if (e.id === id) { return e.clicked = true }
    });
    this.setState({
      cars: array
    })
  }

  resetAll = () => {
    let array = this.state.cars.map(e =>
      e.clicked = false
    );
    this.setState({
      cars: array
    })
  }

  render() {
    return (
      <div>
      <BodyContainer>
        <Jumbo
          score={[this.state.score, this.state.cars.length]}
          message={this.state.msg}
        />
        {this.state.cars.map(c => (
          <CarBox
            src={`${window.location.origin}${c.src}`}
            key={c.id}
            id={`Carimage${c.id}`}
            check={this.check}
            thisCar={c}
          />)
        )}        
      </BodyContainer>
      <Footer/>
      </div>
    );
  }
}

export default App;
