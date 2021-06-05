const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

module.exports = (app) => {
    // Configuración de middlewares
    app.use(express.json());
    app.use(helmet());
  
    const corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(cors(corsOptions));
  
  };
