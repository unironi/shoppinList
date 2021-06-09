import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React, { Component } from 'react';
import Heading from './components/navbar';

class App extends Component {
  state = { 
    counters: []
 }

 handleDelete = (counterId) => {
     const counters = this.state.counters.filter(counter => counter.id !== counterId);
     this.setState({ counters });
 }

 handleDeleteAll = () => {
   const counters = [];
   this.setState({ counters });
 }

 handleAdd = () => {
   const newId = this.state.counters.length;
   const counters = this.state.counters.concat({id: newId, value: 0});
   this.setState({ counters });
 }

 handleReset = () => {
     const counters = this.state.counters.map(counter => {
         counter.value = 0;
         return counter;
    })
    this.setState({ counters });
 }

 handleIncrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({ counters });
 }

 handleDecrement = (counter) => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   --counters[index].value;
   this.setState({ counters });
 }

  render() {
    return (
      <React.Fragment>
        <Heading 
          // totalcounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onDeleteAll={this.handleDeleteAll}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;
