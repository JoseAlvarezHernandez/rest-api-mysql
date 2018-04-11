/**
 * @module server
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Node JS server.js
 */

/** Express instance */
const express = require('express');

/** Path instance */
const path = require('path');

/** URL instance */
const url = require('url');

/** bodyParser instance */
const bodyParser = require('body-parser');

/** Express Router instance */
const router = express.Router();

/** Swagger JSDoc instance */
const swaggerJSDoc = require('swagger-jsdoc');

/** Express object */
const app = express();

/** Node app enviroment */
const nodeEnv = process.env.NODE_ENV || 'development';

/** Environment configurations */
const envConfigs = require('./config/environments');

/** Node app port */
const port = process.env.port || 3978;

/** URL host */
const urlHost = url.parse(envConfigs[nodeEnv].API_URL).host;

/************************************************
 * Swagger doc definition and parameterization
 ************************************************/

/** Swagger definition object */
const swaggerDefinition = {
    info: {
        title: 'API',
        version: '1.0.0',
        description: 'RESTFUL API Documentation',
    },
    host: urlHost,
    basePath: '/',

    // Order of tags in UI
    tags: [
        { name: 'sos' },
    ],
};

/** Swagger options object */
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],
};

/** Swagger specification */
const swaggerSpec = swaggerJSDoc(options);

/************************************************
 * Express middleware
 ************************************************/

/** App Access Control configurations */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding',
}));

app.use(bodyParser.json({
    limit: 1024 * 1024,
    type: 'application/json',
}));

app.use(express.static(path.join(__dirname, 'public')));

/************************************************
 * Import routes
 ************************************************/

/** SOS route */
const sosRoute = require('./routes/sos');

/************************************************
 * Express route binding 
 ************************************************/

// Init get
router.get('/', (req, res) => res.status(200).send({ status: 'up' }));

// serve swagger
router.get('/api/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use(router);
app.use(sosRoute);

app.listen(port, () => console.log('Server up'));