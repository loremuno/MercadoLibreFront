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

export { getItems }