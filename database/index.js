const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'justinkwan',
  host: '127.0.0.1',
  database: 'hotels',
  port: 3000
})

client.connect()
console.log('connected')

module.exports = client