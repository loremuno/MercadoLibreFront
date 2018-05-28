import React from "react";
import Categoria from '../categoria/categoria';
import Item from '../item/item';
class BodyItem extends React.Component {

    state = {
        isLoaded: false,
        categories: null,
    }

    componentDidMount(props) {
        this.cargarComponentes();
    }

    componentWillReceiveProps(props) {
        this.cargarComponentes();
    }

    cargarComponentes() {
        if (this.props.match.params.id) {
            this.setState({
                id: this.props.match.params.id,
            })
        }
    }

    render() {
        return (
            <main>
                <Categoria></Categoria>
                {
                    this.state.id &&
                    <Item id={this.state.id}></Item>
                }
            </main>
        );
    }
}

export default BodyItem;