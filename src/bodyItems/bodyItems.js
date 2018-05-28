import React from "react";
import Categoria from '../categoria/categoria';
import Items from '../items/items';
import Item from '../item/item';
import { getItems } from '../services/apiservices';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BodyItems extends React.Component {

    state = {
        isLoaded: false,
        items: [],
        categories: null,
        id: null,
    }

    componentDidMount(props) {
        this.cargarComponentes();
    }

    componentWillReceiveProps(props) {
        this.cargarComponentes();
    }

    cargarComponentes() {
        const { id } = this.props.match.params
        if (id) {
            this.setState({
                id: id
            })
        }
        else {
            const search = this.props.history.location.search.substring('?search='.length);
            if (search) {
                this.search(decodeURI(search));
            }
        }
    }

    search = (query) => {
        this.setState({
            isLoaded: false,
            id: null,
        });
        console.log(query)
        getItems(query)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('​BodyItems -> search -> result', result);
                    let arreglo = [];
                    for (let index = 1; index <= 4; index++) {
                        let item = result.items[Math.floor(Math.random() * result.items.length)];
                        arreglo.push(item);
                    }
                    this.setState({
                        isLoaded: true,
                        items: arreglo,
                        categories: result.categories,
                        id: null,
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
        const { items, id, isLoaded } = this.state;
        return (
            <main>
                <Categoria categories={this.state.categories}></Categoria>
                {
                    !id &&
                    <Items items={items}></Items>
                }
                {
                    id &&
                    <Item></Item>
                }
                {
                    !isLoaded && !id &&
                    <div className="loadingScreen"><div className="loader"></div></div>
                }
            </main>
        );
    }
}

export default BodyItems;