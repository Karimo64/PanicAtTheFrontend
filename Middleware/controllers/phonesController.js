//Controller

let mysql = require('mysql')
let config = require('../helpers/config') //Import
let connection = mysql.createConnection(config)

//Get all phones for a specific donor
module.exports.get_phones = (request, response) => {
    let sql = "SELECT * FROM DonorPhone WHERE donor_id = ?"
    connection.query(sql, [request.params.id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Get phone(s) of a specific donor

//Update phone

//Delete phone
