//Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

//Get all donations for a specific donor
module.exports.get_donation = (request, response) => {
    let sql = "SELECT * FROM DonorProduct WHERE donor_id = ?"
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Add donation for a donor
module.exports.add_donation = (request, response) => {
    let sql = "CALL AddDonationToDonor(?, ?)"
    connection.query(sql, [request.params.id, request.query.phone], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}


