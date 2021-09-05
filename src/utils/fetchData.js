let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  /* Se requiere por npm xmlhttprequest */

const fetchData = (url_api) => {  /* New XMLHttpRequest to ES6 */
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) /* Ternary for response resolution */
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    })
}


module.exports = fetchData;