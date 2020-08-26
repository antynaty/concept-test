const express = require('express');
const morgan = require('morgan');  
const cors = require('cors');

routes = require('./api/routes/');

// DB before start server
require('./config/db');
// INIT SERVER
const app = express();

// MIDDLEWARES 
app.use(cors({ credentials: true, origin: [`${process.env.BACK_URL}`,`${process.env.FRONT_URL}`] })); 
 
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev'))} 
app.use(express.urlencoded({ extended: false })) 
app.use(express.json());

// R U T A S
routes(app);

// H   A   N   D   L   E       E   R   R   O   R   S  

// HANDLE ERROR ROUTES
app.use((req, res, next) => {
    const error = new Error('Not route found');
    error.status = 404;
    next(error);
})

// HANDLE ALL OTHER ERRORS
app.use((req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// HANDLE CORS errors
app.use((req, res, next) => {
    if (req.headers.origin) { 
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3030/');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Headers", "*");
        res.header('Access-Control-Allow-Credentials', true);
        next();

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
            return res.status(200).json({});
        }
    }
    next()
});

module.exports = app;