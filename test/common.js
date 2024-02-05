'use strict';
require('dotenv').config();



global.reqres = require('hof').utils.reqres;
global.chai = require('chai')
    .use(require('sinon-chai'))
    .use(require('chai-as-promised'))
    .use(require('chai-subset'));
global.should = chai.should();
global.expect = chai.expect;
global.sinon = require('sinon');
global.proxyquire = require('proxyquire');
global.path = require('path');
global.config = require('../config');
global._ = require('lodash');
global.request = reqres.req;
global.response = reqres.res;

const utils = require('./helpers/supertest_session/supertest-utilities.js');
global.getSupertestApp = (subApp, subAppPath, pages) => utils.getSupertestApp(subApp, subAppPath, pages);

process.setMaxListeners(0);
process.stdout.setMaxListeners(0);
