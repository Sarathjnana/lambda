// Importing external modules if required
// const externalModule = require('external-module');

exports.handler = async (event) => {
    try {
        console.log('Hello World');
        
        // Optionally use external modules
        // const result = await externalModule.someFunction();

        return {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Internal Server Error'),
        };
    }
};
