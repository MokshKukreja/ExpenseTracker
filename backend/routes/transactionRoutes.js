const express = require("express")
const { deleteTransaction, createTransaction, getTransaction } = require("../controllers/transactionController")
const transactionRouter = express.Router()
const auth = require("../middleware/auth")

transactionRouter.get("/",auth,getTransaction)
transactionRouter.post("/",auth,createTransaction)
transactionRouter.delete("/:id",auth,deleteTransaction)


module.exports = transactionRouter;