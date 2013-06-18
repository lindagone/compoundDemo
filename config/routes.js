exports.routes = function (map) {
    map.resources('lists');
    map.post()
    map.delel
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
    map.all(*, "con1, _404action")
};