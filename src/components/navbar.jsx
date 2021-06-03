import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "} 
                <span className="btn btn-secondary m-2">
                    {totalCounters}
                </span>
            </a>
        </nav> 
  );
};

/*class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "} 
                    <span className="btn btn-secondary m-2">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav> 
      );
    }
}*/
 
export default Navbar;