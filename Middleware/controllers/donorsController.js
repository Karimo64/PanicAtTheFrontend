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
  let name = request.body.name
  let loc = request.body.localization
  let org = request.body.organization
  let type = request.body.type
  let sql = "CALL CreateDonor(?, ?, ?, ?)"
  connection.query(sql, [name, loc, org, type], (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}

module.exports.del_donor = (request, response) => {
    let sql = "DELETE * FROM Donor Where donor_id = ?"
    connection.query(sql, [request.params.id], (error, results, fields) => {
      if(error) {
        response.send(error)
      }
      response.json(results)
    })

  
}

module.exports.upd_donor = (request, response) => {
  let sql = "UPDATE * FROM Donor Where donor_id = ?"
  connection.query(sql, [request.params.id], (error, results, fields) => {
    if(error) {
      response.send(error)
    }
    response.json(results)
  })
}