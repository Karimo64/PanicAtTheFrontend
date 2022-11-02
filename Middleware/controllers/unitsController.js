//Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

//Get all units for a specific donor
module.exports.get_units = (request, response) => {
    let sql = "SELECT * FROM Unit WHERE donor_id = ?"
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Add unit for a donor
module.exports.add_unit = (request, response) => {
    let sql = "CALL AddDonationUnit(?, ?)"
    connection.query(sql, [request.params.id, request.query.phone], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}
