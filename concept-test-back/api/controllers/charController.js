const mongoose = require('mongoose');
const fetch = require('node-fetch');
// const axios = require('axios');

const Char = require('../models/charModel');

const url = 'http://localhost3030/';

exports.postChar = async (req, res) => {
  const page = req.query.page;
  var charsToInsert = [];
  var urlApi = '';
  const options = {
    method: 'GET',
  }

  if (req.query.page) {
    urlApi = `https://swapi.dev/api/people/?page=${page}`
  } else { urlApi = 'https://swapi.dev/api/people/' }

  console.log(urlApi);
  fetch(urlApi)
    .then(res => res.json())
    .then(json => {
      charsToInsert = json.results;
      console.log(charsToInsert)
      Char.insertMany(charsToInsert, function (err, docs) {
        if (err) { return res.status(409).json({ message: 'Error while insert', error: err }) }
        else { return res.status(200).json({ message: 'all docs people added' }) }
      });
    })
    .catch(err => res.status(400).json(err))
}

exports.getCharAll = async (req, res) => {
  try {
    const pageOptions = {
      page: parseInt(req.query.page) - 1,
      limit: parseInt(req.query.limit) -1
    }
    const startIndex = (pageOptions.page - 1) * pageOptions.limit;
    const endIndex = (pageOptions.page) * pageOptions.limit;
    
    let count = await Char.countDocuments({});
    let charsHard = await Char.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit);
    let result = {};
    result.count = pageOptions.limit;
    if (endIndex < count - 1) {
      result.next = {
        page: pageOptions.page + 2,
        limit: pageOptions.limit
      }
    }
    if (startIndex >= 0) {
      result.previous = {
        page: pageOptions.page ,
        limit: pageOptions.limit
      }
    }
    result.resultUsers = charsHard;
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.getChar = async (req, res) => {
  try {
    let char = await Char.findById(req.params.idChar).exec();
    let response = await fetch(char.homeworld);
    let parseData = await response.json();
    const finalResult = {
      name: char.name,
      height: char.height,
      gender: char.gender,
      homeworld: parseData.name,
      population: parseData.population
    }
    return res.status(200).json(finalResult)

  } catch (error) {
    return res.status(500).json({ message: 'error', error: error })
  }
}