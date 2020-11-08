// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const randomNane = require("random-name")
const handler = async (event,context) => {
  try {
    // const subject = event.queryStringParameters.name || 'World'
const name = randomNane.first()
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${name}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
