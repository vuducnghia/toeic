'use strict'
var http=require('http');
var express = require('express');
var expressConfig = require('./express');
var router = require ('./server/router');
var application = express();

expressConfig(application);
router(application);

const server = http.createServer(application).listen(process.env.PORT ||4200, () => {
    console.log('Server start at port 4200');
});

