//Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

//Get all products for a specific donor
module.exports.get_products = (request, response) => {
    let sql = "SELECT * FROM DonorProduct WHERE donor_id = ?"
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Add products for a donor
module.exports.add_product = (request, response) => {
    let sql = "CALL AddProductForDonation(?, ?)"
    connection.query(sql, [request.params.id, request.query.phone], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}
