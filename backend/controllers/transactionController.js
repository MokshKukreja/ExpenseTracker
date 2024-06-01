const Transaction = require("../models/transaction")
const createTransaction = async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try {
        const transaction = new Transaction({
          description:req.body.description,
          amount:req.body.amount,
          userId: req.userId
        })
        const savedTransaction = await transaction.save()

        res.json(savedTransaction)
        console.log(req.userId)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

const getTransaction = async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try {
        const transactions = await Transaction.find({userId: req.userId});
        res.json(transactions)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

const deleteTransaction = async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try {
        let transaction = await Transaction.findById(req.params.id);
        if (!transaction) { return res.status(404).send("Not Found") }
        transaction = await Transaction.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Transaction has been deleted", transaction: transaction });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    deleteTransaction

}