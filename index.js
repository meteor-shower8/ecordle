/*const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/check', (req, res) => {
    const word = req.query.word

const options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
  params: {entry: word},
  headers: {
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY
  }
}

    axios.request(options).then((response) => {
	    console.log(response.data)
        res.json(respinse.data.result_msg)
    }).catch((error) => {
	    console.error(error)
    })

})


app.listen(PORT, () => console.log('Server running on port ' + PORT))*/
