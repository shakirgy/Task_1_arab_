const express=require('express');
const userRegistration = require('../Functions/Registration');
const loginUser = require('../Functions/Login');
const checkAdmin = require('../Middleware/checkAdminRole');

const middleware=[checkAdmin]

const Router=express.Router()
Router.route('/registering').post(userRegistration);
Router.route('/userloging').post(loginUser);

module.exports=Router;