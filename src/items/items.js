import React from "react";

class Items extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    render() {
        return (
            <div className="contenedor">
                <div className="items">
                    <div className="contenedorImagen">
                        <div className="imagen">

                        </div>
                    </div>
                    <div className="contenedorDescripcion">
                        <p className="precio">$1980<div className="imagen"></div></p>
                        <p className="descripcion">Apple Ipod Touch 5g 16gb Negro igual A Nuevo Completo Unico!</p>
                    </div>
                    <div className="contenedorUbicacion">
                        <p>Capital Federal</p>
                    </div>
                </div>
                <hr />
                <div className="items">
                    <div className="contenedorImagen">
                        <div className="imagen">

                        </div>
                    </div>
                    <div className="contenedorDescripcion">
                        <p className="precio">$1980<div className="imagen"></div></p>
                        <p className="descripcion">Apple Ipod Touch 5g 16gb Negro igual A Nuevo Completo Unico!</p>
                    </div>
                    <div className="contenedorUbicacion">
                        <p>Capital Federal</p>
                    </div>
                </div>
                <hr />
                <div className="items">
                    <div className="contenedorImagen">
                        <div className="imagen">

                        </div>
                    </div>
                    <div className="contenedorDescripcion">
                        <p className="precio">$1980<div className="imagen"></div></p>
                        <p className="descripcion">Apple Ipod Touch 5g 16gb Negro igual A Nuevo Completo Unico!</p>
                    </div>
                    <div className="contenedorUbicacion">
                        <p>Capital Federal</p>
                    </div>
                </div>
                <hr />
                <div className="items">
                    <div className="contenedorImagen">
                        <div className="imagen">

                        </div>
                    </div>
                    <div className="contenedorDescripcion">
                        <p className="precio">$1980<div className="imagen"></div></p>
                        <p className="descripcion">Apple Ipod Touch 5g 16gb Negro igual A Nuevo Completo Unico!</p>
                    </div>
                    <div className="contenedorUbicacion">
                        <p>Capital Federal</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Items;