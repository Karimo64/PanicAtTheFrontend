// Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

//Get all donors
module.exports.get_donors = (request, response) => {
  let sql = "SELECT * FROM Donor"
  connection.query(sql, (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

//Get a specific donor
module.exports.get_donor = (request, response) => {
  let sql = "SELECT * FROM Donor WHERE donor_id = ?"
  connection.query(sql, [request.params.id] ,(error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

//Add a new donor
module.exports.add_donor = (request, response) => {
  console.log(request.body)
  let sql = "CALL CreateDonor(?, ?, ?, ?)"
  connection.query(sql, [request.query.name, request.query.localization, request.query.organization, request.query.type], (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

//Delete a specific donor
module.exports.delete_donor = (request, response) => {
  let sql = "DELETE FROM Donor Where donor_id = ?"
  connection.query(sql, [request.params.id], (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

module.exports.update_donor = (request, response) => {
let sql = "UPDATE Donor SET donor_name = ?, donor_localization = ?, donor_organization = ?, donor_type = ? WHERE donor_id = ?"
connection.query(sql, [request.query.name, request.query.localization, request.query.organization, request.query.type, request.params.id], (error, results, fields) => {
  if(error) {
    response.send(error)
  }
  response.json(results)
})
}