let resultData = {};
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const FormData = require('form-data');
const fetch = require("node-fetch");
const path = require('path');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/nlp-api', async(req, res) => {
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", req.body.url);
    formdata.append("lang", "en"); 

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    console.log('Start_API_Request');
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    try{
        const data = await response.json();
        console.log('Received_API_Request');
        console.log(data.status);
        resultData = {
            status: data.status,
            subjectivity: data.subjectivity,
            agreement: data.agreement,
            confidence: data.confidence,
            irony: data.irony
        }
        res.send(resultData);
        console.log('Resend_API_Request');
    }catch(error){
        console.log("error", error);
    }

});