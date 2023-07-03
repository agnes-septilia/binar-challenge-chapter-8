const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

//// import packages for swagger
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express');
const YAML = require ('yamljs');

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)


//// put swagger to api
/**
 * @Routes /docs
 * API documentation for all API routes
 */
const swaggerDocument = YAML.load('./server/routes/swagger-config.yaml');
app.use('/docs', swaggerui.serve, swaggerui.setup(
  swaggerDocument,
  {
    swaggerOptions: { 
      defaultModelsExpandDepth: -1
    } 
  }
));



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})