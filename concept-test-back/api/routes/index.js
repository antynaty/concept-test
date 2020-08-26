const charRoutes = require('./charRoutes'); 
const planetRoutes = require('./planetRoutes');

module.exports = app => { 
    app.use('/chars', charRoutes); 
    app.use('/planets', planetRoutes); 
}