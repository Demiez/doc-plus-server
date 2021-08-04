import * as express from 'express';
import * as core from 'express-serve-static-core';
import * as swagger from 'swagger-express-ts';
const package_json = require('../package.json');

export function registerSwagger(app: core.Express) {
  app.use('/api', express.static('swagger'));
  app.use('/api/assets', express.static('node_modules/swagger-ui-dist'));
  app.use(
    swagger.express({
      definition: {
        info: {
          title: package_json.name,
          version: package_json.version,
        },
        schemes: ['http', 'https'],
        securityDefinitions: {
          basicAuth: {
            name: 'Authorization',
            type: swagger.SwaggerDefinitionConstant.Security.Type.API_KEY,
          },
        },
      },
      path: '/api/swagger.json',
    })
  );
}
