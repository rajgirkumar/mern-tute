require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./models');
//const handle = ('./handlers');
const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req,res) => res.json({Hello:"welcome Express js"}));
app.use((req,res,next) =>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use((err,req,res,next) =>{
    res.status(err.status || 500).json({
      err:err.message || 'something went wrong'
    });
});
app.listen(port,console.log(`server started on port ${port}`));
