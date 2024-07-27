import axios from "axios";

const TRANSACTION_BASE_URL = "http://localhost:8080/transaction/";
const TRANSACTION_HOME_URL="http://localhost:8080/allTransactions";
const TRANSACTION_ADD_URL="http://localhost:8080/addTransaction";
class TransactionsService
{
    getTransactions()
    {
            return axios.get(TRANSACTION_HOME_URL);
    }
    createTransaction(Transaction)
    {
        return axios.post(TRANSACTION_ADD_URL);
    }
    deleteTransaction(TransactionId)
    {
        return axios.delete(TRANSACTION_BASE_URL+TransactionId);
    }
}

export default new TransactionsService()