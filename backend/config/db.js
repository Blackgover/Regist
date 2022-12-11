require('dotenv').config();
const mongoose = require('mongoose');

// mongoose
//     .connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => {
//         console.log("DB Connected");
//     })
//     .catch((err) => console.log(err));

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((x) => {
        console.log(`Connected to Mongo Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })
