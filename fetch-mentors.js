const fetch = require('node-fetch')
var fs = require('fs')
const Papa = require('papaparse')

const downloadFile = async (url, path) => {
  const res = await fetch(url)
  const fileStream = fs.createWriteStream(path)
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream)
    res.body.on('error', err => {
      reject(err)
    })
    fileStream.on('finish', function() {
      resolve()
    })
  })
}

const covertCSVToJson = async (csvPath, jsonPath) => {
  const file = fs.createReadStream(csvPath)

  Papa.parse(file, {
    delimiter: ',',
    header: false,
    worker: true,
    complete: function(results) {
      saveAcceptedMentorsToJson(results.data, jsonPath)
    },
  })
}

const saveAcceptedMentorsToJson = (data, jsonPath) => {
  // index 15 - accepted, 1 = accepted, ""/null not accepted

  const acceptedMentors = data.filter(innerArray => innerArray[15] === '1')
  const jsonContent = JSON.stringify(acceptedMentors)

  fs.writeFile(jsonPath, jsonContent, 'utf8', function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

const URL = `https://docs.google.com/spreadsheets/d/1oONOmVCAAJkp_oK6pL2nU4inSMfErIunilc83Fgc3Mk/export?format=csv`
const CSV_PATH = './mentors.csv'
const JSON_PATH = './mentors.json'

const fetchMentors = async (utl, csvPath, jsonPath) => {
  await downloadFile(utl, csvPath)
  await covertCSVToJson(csvPath, jsonPath)
}

fetchMentors(URL, CSV_PATH, JSON_PATH)
