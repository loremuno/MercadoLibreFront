import React from "react";
import Categoria from '../categoria/categoria';
import Items from '../items/items';
import { getItems } from '../services/apiservices';

class BodyItems extends React.Component {

    state = {
        isLoaded: false,
        items: null,
    }

    componentWillReceiveProps() {
        const search = this.props.location.search.substring('?search='.length);
        this.search(decodeURI(search));
    }

    search = (query) => {
        this.setState({
            isLoaded: false,
        });
        console.log(query)
        getItems(query)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('​Header -> search -> result', result);
                    this.setState({
                        isLoaded: true,
                        items: result.items
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
                <Items items={this.state.items}></Items>
                {
                    !this.state.isLoaded &&
                    <div className="loadingScreen"><div className="loader"></div></div>
                }
            </main>
        );
    }
}

export default BodyItems;