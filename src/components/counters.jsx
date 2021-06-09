import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onDeleteAll, onAdd, onIncrement, onDecrement } = this.props;
        return ( 
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary m-2"
                >Reset All</button>
                <button
                    onClick={onAdd}
                    className="btn btn-warning m-2"
                >Add</button>
                <button
                    onClick={onDeleteAll}
                    className="btn btn-danger m-2"
                >Delete All</button>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div> 
        );
    }
}
 
export default Counters;