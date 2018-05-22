import React from "react";

let header = new Headers({
    'Access-Control-Allow-Origin': '*',
});

let sentData = {
    method: 'GET',
    mode: 'cors',
    header: header,
    cache: 'default',
};

class Header extends React.Component {

    state = {
        query: 'asd',
    }
    search = () => {
        fetch("http://localhost:4000/api/items?q=" + this.state.query, sentData)
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
            <div className="wrapper">
                <div className="seven">
                    <div className="centerDiv searchDiv">
                        <div className="mlIcon"><i></i></div>
                        <input value={this.state.query} onChange={(event) => {
                            console.log(event.target.value)
                            this.setState({
                                query: event.target.value
                            })
                        }} className="searchInput" placeholder="Nunca dejes de buscar" />
                        <button onClick={this.search} className="searchButton"><i className=""></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;