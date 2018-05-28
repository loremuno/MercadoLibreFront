import React from "react";
import Categoria from '../categoria/categoria';
import Items from '../items/items';
import { getItems } from '../services/apiservices';

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
        this.setState({
            isLoaded: false,
            id: null,
        });
        console.log(this.props.history.location.pathname.substring('/items/'.length));
        if (this.props.history.location.search) {
            const search = this.props.history.location.search.substring('?search='.length);
            if (search) {
                this.search(decodeURI(search));
            }
        }
        if (this.props.location.pathname.substring('/items/'.length) !== "") {
            this.setState({
                id: this.props.location.pathname.substring('/items/'.length),
            })
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
                        item.precioFormat = item.price.amount.toLocaleString('es-ar', { style: 'decimal', decimal: item.price.decimals });
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
        return (
            <main>
                <Categoria categories={this.state.categories}></Categoria>
                <Items items={this.state.items}></Items>
                {
                    !this.state.isLoaded && !this.state.id &&
                    <div className="loadingScreen"><div className="loader"></div></div>
                }
            </main>
        );
    }
}

export default BodyItems;