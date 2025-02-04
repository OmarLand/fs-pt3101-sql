const express = require('express');
const db = require('./configs/db');
const app = express();


const routes = require( './routes' );

// Ojo revisar!!!
// EL Código de ORO Secreto! No olvidar xD
// 100% Real NO FAKE
app.use(express.json()); // <============



app.use( routes(db) );

app.use( (req, res, next) =>{
  next({
    statusCode : 404,
    error      : new Error( '==> Path not found' )
  })
})

app.use(({statusCode, error}, req, res, next) =>{
  res.status(statusCode).json({
    success : false,
    message : error.message,
  })
})

app.listen(process.env.PORT, () => console.info(`> listening at ${process.env.PORT}`))
