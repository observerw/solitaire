export default (name, ID, params = '', method = 'get') => {
    return fetch('/' + method + '/' + name + '/' + ID + '?' + params)
        .then((response) => response.json())
        .then(Json => {
            if (Json.mes.length > 0) {
                console.log(Json.mes);
                return {};
            } else {
                return Json.data;
            }
        })
        .catch(error => {
            console.log("error:" + error);
        })
}