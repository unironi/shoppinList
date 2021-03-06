import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from'react-bootstrap/Col';

class Counter extends Component {
 //   state = {
 //      value: this.props.counter.value,
 //  };

  //  handleIncrement = () => {
  //      this.setState({ value: this.state.value + 1 });
  //  }

  //  handleDecrement = () => {
  //      this.setState({ value: this.state.value - 1 });
  //  }

    render() {
        return (
            <div>
                <Form.Row>
                    <Col xs={3}>
                        <Form.Control type="text" placeholder="Item" />
                    </Col>
                </Form.Row>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                   // onClick={this.handleIncrement} 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-primary m-2"
                >+</button>  
                <button
                   // onClick={this.handleDecrement}
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-primary m-2"
                >-</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >Delete</button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = "btn m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value;
       // return value === 0? 'Zero' : value;
    }
}
 
export default Counter;