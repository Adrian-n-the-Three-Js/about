const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'justinkwan',
  host: '54.241.56.213',
  database: 'hotels',
  port: 5432
})

client.connect()
console.log('connected')

module.exports = client