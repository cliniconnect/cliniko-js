const Cliniko = require('../').Cliniko
const opts = require('./config')
const cliniko = new Cliniko(opts)

cliniko.on("data", (records) => {
  console.log(JSON.stringify(records, null, 2))
})
cliniko.on("done", (summary) => {
  console.log(JSON.stringify(summary, null, 2))
  console.log("Done")
})
console.log("Deleted invoice items of an invoice")
cliniko.invoice(16956979).getDeletedInvoiceItems()
  .catch(console.error)
