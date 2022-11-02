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

//Add phone for a donor
module.exports.add_phone = (request, response) => {
    let sql = "CALL AddPhoneToDonor(?, ?)"
    connection.query(sql, [request.params.id, request.query.phone], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Delete specific phone for a donor
module.exports.delete_phone = (request, response) => {
    let sql = "DELETE FROM DonorPhone WHERE phone_id = ?"
    connection.query(sql, [request.params.phone_id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}

//Update specific phone for a donor
module.exports.update_phone = (request, response) => {
    let sql = "UPDATE DonorPhone SET donor_phone = ? WHERE phone_id = ?"
    connection.query(sql, [request.query.phone, request.params.phone_id], (error, results, fields) => {
        if(error) {
            response.send(error)
        }
        response.json(results)
    })
}