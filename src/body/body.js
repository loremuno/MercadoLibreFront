import React from "react";
import Categoria from '../categoria/categoria';
import Items from '../items/items';
import Item from '../item/item';

class Body extends React.Component {

    state = {
        query: '',
        loading: false,
    }

    render() {
        return (
            <main>
                <Categoria></Categoria>
                {/* <Items></Items> */}
                <Item></Item>
            </main>
        );
    }
}

export default Body;