module.exports = function (compound) {

    var express = require('express');
    var app = compound.app;
	var http = require('http')
    , connect = require('connect')
	, path = require('path');
	var cas_validate = require('cas_validate');
	var CAS_HOST = 'http://192.168.0.153';
	var PORT = 3000;
	var MY_HOST = 'http://127.0.0.1' + ":" + PORT +"/";
	/**
	 * 1. 更改force_protocal中的force_protocol,因为我们自己的cas不是https的
	 * 2. 更改cas的contextname，我们自己的是http://xxxx/sso/login，而代码里面默认是http://xxxx/cas/login
	 */
	
	var casmiddle = connect()
	casmiddle.use(cas_validate.ssoff())
	casmiddle.use(cas_validate.ticket({'cas_host':CAS_HOST,'service':MY_HOST}))
	casmiddle.use(cas_validate.check_and_return({'cas_host':CAS_HOST ,'service':MY_HOST}))
	
	
	//.use(cas_validate.check_and_return({'cas_host':CAS_HOST,'service':MY_HOST}))
	casmiddle.use(function(req, res, next){
	    if(req.session.st){
	        next()
	    }else{
	        return res.end('hello world (not logged in)')
	    }
	})
	
	
    app.configure(function(){
        app.set('jsDirectory', '/js/');
        app.set('cssDirectory', '/css/');
        app.set('cssEngine', 'stylus');
        
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.static(app.root + '/public', { maxAge: 86400000 }));
        app.use(express.bodyParser());
        app.use(express.cookieParser('secret'));
        app.use(express.session({secret: 'secret'}));
        app.use(express.methodOverride());
        // app.use('/logout',cas_validate.logout({'cas_host':CAS_HOST ,'service':MY_HOST}))
		// app.use('/login',cas_validate.check_or_redirect({'cas_host':CAS_HOST,'service':MY_HOST}))
        // app.use("/",casmiddle)
        app.use(app.router);
        
         
    });

};
