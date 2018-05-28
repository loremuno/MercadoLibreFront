import React from "react";

class Categoria extends React.Component {

    componentWillReceiveProps(props) {
        this.setState({
            categories: props.categories,
        })
    }

    state = {
        loading: false,
        categories: null,
    }

    render() {
        return (
            <div className="categoria">
                {this.state.categories && this.state.categories.map(function (categorie, i) {
                    return (
                        <div key={i}>{categorie + " > "}</div>
                    )
                })}
            </div>
        );
    }
}

export default Categoria;