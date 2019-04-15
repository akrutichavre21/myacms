var login = require('./login');
var createuser = require('./createuser');
var verify = require('./verify');
var logout = require('./logout');
var createproject = require('./createproject');
var contributor = require('./contributor');
var reviewer = require('./reviewer');
var saveproject = require('./saveproject');
var projectdesc = require('./displayprojects');
var savecomment = require('./savecomment');
var displaycomments = require('./displaycomments');
var statusupdate = require('./statusupdate');
var saveenable = require('./saveenable');

const express = require('express');
const router = express.Router();

  router.post('/login',login);
  router.post('/createuser',createuser);
  router.post('/createproject',createproject);
  router.post('/contributor',contributor);
  router.post('/reviewer',reviewer);
  router.post('/saveproject',saveproject);
  router.post('/projectdesc',projectdesc);
  router.post('/savecomment',savecomment);
  router.post('/displaycomments',displaycomments);
  router.post('/statusupdate',statusupdate);
  router.post('/saveenable',saveenable);
  router.post('/verify',verify);
  router.post('/logout',logout);


module.exports=router;
//module.exports=createuser;
//module.exports=verify;
//module.exports=logout;
