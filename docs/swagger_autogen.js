import swaggerAutogen from'swagger-autogen';

const doc = {
  info: {
    title: 'Skeleton API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

// Run node swagger_autogen.js