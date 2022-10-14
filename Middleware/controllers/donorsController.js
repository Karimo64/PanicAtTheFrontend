// Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

module.exports.get_donors = (request, response) => {
  let sql = "SELECT * FROM Donor"
  connection.query(sql, (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

module.exports.get_donor = (request, response) => {
  let sql = "SELECT * FROM Donor WHERE donor_id = ?"
  connection.query(sql, [request.params.id] ,(error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

module.exports.add_donor = (request, response) => {
  console.log(request.body)
  let name = request.query.name   //Delete unnecessary variables
  let loc = request.query.localization
  let org = request.query.organization
  let type = request.query.type
  let sql = "CALL CreateDonor(?, ?, ?, ?)"
  connection.query(sql, [name, loc, org, type], (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

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