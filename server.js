/**
 * Created by hxs on 2017/9/10.
 */
'use strict';

var express = require('express');
var http = require('http');
var app = express();
app.use(express.static('./www'));
var server = http.createServer(app);
server.listen(3000);
