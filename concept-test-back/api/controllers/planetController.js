const mongoose = require('mongoose');
const fetch = require('node-fetch');
// const axios = require('axios');

const Planet = require('../models/planetModel');


exports.postChar = async (req, res) => {
  const page = req.query.page;
  var planetsToInsert = [];
  const options = {
    method: 'GET',
  }

  if(req.query.page){
    urlApi = `https://swapi.dev/api/planets/?page=${page}`
  } else { urlApi = 'https://swapi.dev/api/planets/'}

  fetch(urlApi)
    .then(res => res.json())
    .then(json => {
      planetsToInsert = json.results;
      console.log(planetsToInsert)
      Planet.insertMany(planetsToInsert, function (err, docs) {
        if (err) { return res.status(409).json({ message: 'Error while insert', error : err }) }
        else { return res.status(200).json({ message: 'all docs planets added' }) }
      });
    })
    .catch(err => res.status(400).json(err))
}