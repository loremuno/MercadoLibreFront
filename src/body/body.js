import React from "react";

class Body extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    render() {
        return (
            <main>
                <div className="categoria">
                    Electrónica, Audio y Video > iPod > Reproductores > iPod touch > 32 GB
                </div>
                <div className="contenedor">
                    <div className="items">
                        <div className="contenedorImagen">
                            <div className="imagen">

                            </div>
                        </div>
                        <div className="contenedorDescripcion">
                            <p>$1980</p>
                            <p>Apple Ipod Touch 5 GB ....</p>
                            <p>Completo Unico!</p>
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
                            <p>$1980</p>
                            <p>Apple Ipod Touch 5 GB ....</p>
                            <p>Completo Unico!</p>
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
                            <p>$1980</p>
                            <p>Apple Ipod Touch 5 GB ....</p>
                            <p>Completo Unico!</p>
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
                            <p>$1980</p>
                            <p>Apple Ipod Touch 5 GB ....</p>
                            <p>Completo Unico!</p>
                        </div>
                        <div className="contenedorUbicacion">
                            <p>Capital Federal</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Body;