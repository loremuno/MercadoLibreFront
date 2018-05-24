import React from "react";

class Item extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    render() {
        return (
            <div className="contenedor">
                <div className="item">
                    <div className="contenedorImagenItem">
                        <div className="imagen">

                        </div>
                    </div>
                    <div className="contenedorInfoItem">
                        <p className="condicion">Nuevo - 234 vendidos</p>
                        <p className="titulo"><b>Deco Reverse Sombrero Oxford</b></p>
                        <p className="precio">$1980</p>
                        <button>Comprar</button>
                    </div>
                    <div className="contenedorDescripcionItem">
                        <p className="titulo">Titulo descripcion</p>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;