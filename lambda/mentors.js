const fetch = require('node-fetch')
const qs = require('querystring')

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
module.exports.handler = async function(event, context) {
  console.log('queryStringParameters', event.queryStringParameters)

  const key = 'AIzaSyAPt1DGNBXwmFS8Ivp1ubmrdfOJ98oDNI0'
  const responsesSpreadsheetID = '1oONOmVCAAJkp_oK6pL2nU4inSMfErIunilc83Fgc3Mk'
  const apiURL = 'https://sheets.googleapis.com/v4/spreadsheets/'
  // https://sheets.googleapis.com/v4/spreadsheets/1oONOmVCAAJkp_oK6pL2nU4inSMfErIunilc83Fgc3Mk/values:batchGet?ranges=%27Form+Responses+1%27%21B%3AB&ranges=%27Form+Responses+1%27%21E%3AE&ranges=%27Form+Responses+1%27%21E%3AE&ranges=%27Form+Responses+1%27%21O%3AQ&key=AIzaSyAPt1DGNBXwmFS8Ivp1ubmrdfOJ98oDNI0
  const batchGetEndpoint = '/values:batchGet'
  const sheetName = "'Form Responses 1'"
  const nameColumnIDFragment = sheetName + '!B'
  const nameColumn = nameColumnIDFragment + '2:B'
  const trackColumnIDFragment = sheetName + '!E'
  const trackColumn = trackColumnIDFragment + '2:E'
  const settingsColumnsIDFragment = sheetName + '!O'
  const settingsColumns = settingsColumnsIDFragment + '2:Q'

  const params = {
    key,
    ranges: [nameColumn, trackColumn, settingsColumns],
  }

  // nodeFetch
  //   .default(
  //     apiURL +
  //       responsesSpreadsheetID +
  //       batchGetEndpoint +
  //       '?' +
  //       qs.encode(params)
  //   )
  //   .then(res => console.log(res))

  try {
    const response = await fetch.default(
      apiURL +
        responsesSpreadsheetID +
        batchGetEndpoint +
        '?' +
        qs.encode(params)
    )
    console.log(response)
    const json = await response.json()
    console.log(json)

    return {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify(json.valueRanges[0].values),
    }
  } catch (e) {
    console.log(e)
    return {
      // return null to show no errors
      statusCode: 500, // http status code
      body: JSON.stringify(e),
    }
  }
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
