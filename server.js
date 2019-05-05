const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes/apiBooks');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.use(routes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googleBooks', { useNewUrlParser: true })
    .then(() =>console.log('Mongoose is conntected'))
    .catch(err => console.log(err))

app.listen(PORT, function(){
    console.log(`listening on port: ${PORT}`)
})