const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then( conn => {
        console.log(`Database is connected: ${conn.connection.host}`);
    }, err => {
        console.log('Can not connect to the database' + err)
    }); 