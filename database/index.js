const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  password: 'justinkwan',
  host: '172.17.0.2',
  database: 'hotels',
  port: 3000,
})

// client.connect(err => {
//   if (err) {
//     console.log('connection error', err.stack)
//   } else {
//     console.log('connected to PostgreSQL')
//   }
// })
client.connect()
console.log('connected')


// ;(async () => {
//   await client.connect()
//   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//   console.log(res.rows[0].message) // Hello world!
//   await client.end()
// })()

module.exports = client