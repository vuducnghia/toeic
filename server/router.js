'use strict';
var path = require('path');

module.exports = function (app) {
    app.get('*', (req, res) => {
        res.render('index', { title: 'My Todos' });
    })
}