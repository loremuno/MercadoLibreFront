import React from "react";

class Categoria extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    render() {
        return (
            <div className="categoria">
                Electrónica, Audio y Video > iPod > Reproductores > iPod touch > 32 GB
            </div>
        );
    }
}

export default Categoria;