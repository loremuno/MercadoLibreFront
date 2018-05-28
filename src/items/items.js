import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Items extends React.Component {

    componentWillReceiveProps(props) {
        this.setState({
            items: props.items,
        })
    }

    state = {
        loading: false,
        items: null,
    }

    render() {
        return (
            <div className="contenedor">
                {this.state.items && this.state.items.map((item, i) => {
                    return (
                        <Link to={"/items/" + item.id} key={item.id} className="items">
                            <div className="contenedorImagen">
                                <div className="imagen" style={{ background: "url(" + item.picture + ")no-repeat left", backgroundSize: "contain" }}>

                                </div>
                            </div>
                            <div className="contenedorDescripcion">
                                <p className="precio">{"$" + item.price.amount}
                                    {item.free_shipping &&
                                        <i className="imagen"></i>
                                    }
                                </p>
                                <p className="descripcion">{item.title}</p>
                            </div>
                            <div className="contenedorUbicacion">
                                <p>Capital Federal</p>
                            </div>
                            <hr />
                        </Link>)
                })}
            </div>
        );
    }
}

export default Items;