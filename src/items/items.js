import React from "react";

class Items extends React.Component {

    componentWillReceiveProps(props) {
        this.setState({
            items: props.items,
            isLoaded: true,
        })
    }

    state = {
        isLoaded: false,
        items: null,
    }

    render() {
        return (
            <div className="contenedor">
                {this.state.items && this.state.items.map((item, i) => {
                    return (
                        <a href={"/items/" + item.id} key={item.id} className="items">
                            <div className="contenedorImagen">
                                <div className="imagen" style={{ background: "url(" + item.picture + ")no-repeat left", backgroundSize: "contain" }}>

                                </div>
                            </div>
                            <div className="contenedorDescripcion">
                                <p className="precio">{"$" + item.precioFormat}
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
                        </a>)
                })}
            </div>
        );
    }
}

export default Items;