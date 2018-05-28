import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

    state = {
        query: '',
    }

    render() {
        return (
            <header>
                <Link className="logo" to="/"></Link>
                <input value={this.state.query} onChange={(event) => {
                    this.setState({
                        query: event.target.value
                    })
                }} type="text" placeholder="Nunca dejes de buscar" />
                <Link className="boton" to={"/items?search=" + this.state.query}></Link>
            </header>
        );
    }
}

export default Header;