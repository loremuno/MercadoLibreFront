import React from "react";
import { getItems } from '../services/apiservices';

class Header extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    search = () => {
        getItems(this.state.query)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('​Header -> search -> result', result);
                    // this.setState({
                    //     isLoaded: true,
                    //     items: result.items
                    // });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {
        return (
            <header>
                <div></div>
                <input type="text" placeholder="Nunca dejes de buscar" />
                <button></button>
            </header>
            // <div className="wrapper">
            //     <div className="seven">
            //         <div className="centerDiv searchDiv">
            //             <div className="mlIcon"><i></i></div>
            //             <input value={this.state.query} onChange={(event) => {
            //                 console.log(event.target.value)
            //                 this.setState({
            //                     query: event.target.value
            //                 })
            //             }} className="searchInput" placeholder="Nunca dejes de buscar" />
            //             <button onClick={this.search} className="searchButton"><i className=""></i></button>
            //         </div>
            //     </div>
            //     <div className="loadingScreen"><div className="loader"></div></div>
            // </div>

        );
    }
}

export default Header;