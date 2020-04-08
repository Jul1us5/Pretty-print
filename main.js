let get = '';

function getPath(object, path) {
    path = [];
    Object.keys(object).forEach(function (key) {
        if (object[key] && typeof object[key] === 'object') {
            return getPath(object[key], path.concat(key));
        }
        get += path.concat([object[key]] + '</br>');
    });
}

var data = diskas;
getPath(data);

document.querySelector('body').innerHTML = get;