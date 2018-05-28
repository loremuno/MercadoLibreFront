let header = new Headers({
    'Access-Control-Allow-Origin': '*',
})

let sentData = {
    method: 'GET',
    mode: 'cors',
    header: header,
    cache: 'default',
}


function getItems(query) {
    return fetch("http://localhost:4000/api/items?q=" + query, sentData)
}

function getItem(id) {
    return fetch("http://localhost:4000/api/items/" + id, sentData).then(res => res.json()).then(
        (item) => {
            return fetch("http://localhost:4000/api/items/" + id + "/description", sentData).then(res => res.json()).then(
                (description) => {
                    item.item.description = description.description;
                    return item;
                },
                (error) => {
                    console.log('​getItem -> error', error);
                }
            )
        },
        (error) => {
            console.log('​getItem -> error', error);
        }
    )
}

export { getItems, getItem }