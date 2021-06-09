import React, { Component } from 'react';

/*const Navbar = ({totalCounters}) => {
    return ( 
        <div className="fixed-top" left="30px">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Shopping List{" "} 
                </a>
            </nav>
        </div>   
  );
}; */

class Navbar extends Component {
    styles = {
        left: 50
    }
    render() { 
        return ( 
            <nav style={ this.styles } className="navbar navbar-bold">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Shopping List</span>
                </div>
            </nav> 
      );
    }
}
 
export default Navbar;