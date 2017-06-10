const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const router = require('./router');


const COLLECTION_NAME = 'images';
const UPLOAD_PATH = 'uploads';
const app = express();

app.use(cors());

router(app);

app.listen(process.env.PORT || 8080, err => console.log(err || `Listening on 8080`));
