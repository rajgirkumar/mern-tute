require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./models');
const handle = require('./handlers');
const users = require('./routes/api/index');
const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req,res) => res.json({Hello:"welcome Express js"}));
app.get('/about' ,(req,res) =>{
    res.send('About page');
});
app.use('/api/user',users);
app.use(handle.notFound);
app.use(handle.errors);
app.listen(port,console.log(`server started on port ${port}`));
