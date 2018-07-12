import React from 'react';
import CarBox from "./components/CarBox";
import BodyContainer from "./components/BodyContainer";
import './App.css';
import cars from './cars.json';

class App extends React.Component {
  state = {
    cars: cars,
    score: 0,
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

  check = (clicked,id) => {
    if (!clicked) {
      this.setState({
        score: this.state.score+1,
      })
      this.updateOne(id)
    } else {
      this.setState({
        score: 0
      }) 
      this.resetAll()   
    }
    this.ShuffleCars()
  }

  updateOne =(id) => {
    let array = this.state.cars.forEach(e => {
      if (e.id === id) {return e.clicked = true}
    });
    this.setState({
      cars:array
    })
  }

  resetAll = () => {
    let array = this.state.cars.map(e => 
       e.clicked = false
    );
    this.setState({
      cars:array
    })
  }  

  render() {
    return (
      <BodyContainer>
        <h1 className="title">Cars</h1>
        <h2 className="title">Score: {this.state.score}/12</h2>
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
    );
  }
}

export default App;
