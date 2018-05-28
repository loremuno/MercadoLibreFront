import React from "react";
import { getItem } from '../services/apiservices';

class Item extends React.Component {

    state = {
        isLoaded: false,
        item: null,
        categories: null,
    }

    componentDidMount() {
        let id = this.props.id;
        this.search(id);
    }

    search = (id) => {
        this.setState({
            isLoaded: false,
        });
        getItem(id)
            .then(
                (result) => {
                    result.item.precioFormat = result.item.price.amount.toLocaleString('es-ar', { style: 'decimal', decimal: result.item.price.decimals });
                    this.setState({
                        item: result.item,
                        isLoaded: true,
                    });
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
            <div className="contenedor">
                {this.state.item &&
                    <div className="item">
                        <div className="contenedorImagenItem">
                            <div className="imagen" style={{ background: "url(" + this.state.item.picture + ")no-repeat left", backgroundSize: "contain" }}></div>
                        </div>
                        <div className="contenedorInfoItem">
                            {
                                this.state.item.condition === "new" &&
                                <p className="condicion"> Nuevo - 234 vendidos</p>
                            }
                            {
                                this.state.item.condition !== "new" &&
                                <p className="condicion"> Usado - 3 vendidos</p>
                            }
                            <p className="titulo"><b>{this.state.item.title}</b></p>
                            <p className="precio">${this.state.item.precioFormat}</p>
                            <button>Comprar</button>
                        </div>
                        <div className="contenedorDescripcionItem">
                            <p className="titulo">Descripción del producto</p>
                            <p>{this.state.item.description}</p>
                        </div>
                    </div>
                }
                {
                    !this.state.isLoaded &&
                    <div className="loadingScreen"><div className="loader"></div></div>
                }
            </div>
        );
    }
}

export default Item;