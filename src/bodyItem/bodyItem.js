import React from "react";
import Categoria from '../categoria/categoria';
import Item from '../item/item';
import { getItem } from '../services/apiservices';

class BodyItem extends React.Component {

    state = {
        isLoaded: false,
        item: null,
        categories: null,
    }

    componentDidMount(props) {
        const { id } = this.props.match.params
        console.log('​BodyItem -> componentDidMount -> handle', id);
        this.search(id);
    }

    search = (id) => {
        this.setState({
            isLoaded: false,
        });
        getItem(id)
            .then(
                (result) => {
                    console.log('​Header -> search -> result', result);
                    this.setState({
                        item: result,
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
            <main>
                <Categoria></Categoria>
                <Item></Item>
            </main>
        );
    }
}

export default BodyItem;