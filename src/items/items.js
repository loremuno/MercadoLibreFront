import React from "react";

class Items extends React.Component {

    componentWillReceiveProps(props) {
        console.log('​Items -> componentWillReceiveProps -> props', props);
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
                {this.state.items && this.state.items.map(function (item, i) {
                    return (
                        <div key={item.id} className="items">
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
                        </div>)
                })}
            </div>
        );
    }
}

export default Items;