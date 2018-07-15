'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var application = express();

module.exports = function (app) {
    // view engine setup
    app.set('views', path.join(__dirname, 'client'));
    app.set('view engine', 'pug');
    app.use(express.static(path.join(__dirname, 'client')));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
