import React from "react";
import Categoria from '../categoria/categoria';
import Item from '../item/item';

class BodyItem extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params
        console.log('​BodyItem -> componentDidMount -> handle', id);
    }
    render() {
        return (
            <main>
                <Categoria></Categoria>
                <Item></Item>
            </main>
        );
    }
}

export default BodyItem;