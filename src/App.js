// src/App.js
import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import ShowTransactions from './components/ShowTransactions';
import AddTransactionForm from './Forms/AddTransactionForm';
import UpdateTransactionForm from './Forms/UpdateTransactionForm';
import TransactionService from './Services/TransactionService';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionToUpdate, setTransactionToUpdate] = useState(null);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openUpdateModal = (transaction) => {
    setTransactionToUpdate(transaction);
    setUpdateModalIsOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };

  const fetchTransactions = async () => {
    const res = await TransactionService.getTransactions();
    setTransactions(res.data);
  };

  const handleAddTransaction = async (newTransaction) => {
    await TransactionService.addTransaction(newTransaction);
    closeModal();

  };

  const handleUpdateTransaction = async (updatedTransaction) => {
    await TransactionService.updateTransaction(updatedTransaction.id, updatedTransaction);
    closeUpdateModal();
  };

  // const handleDeleteTransaction = async (transactionId) => {
  //   await TransactionService.deleteTransaction(transactionId);
  //   await fetchTransactions();
  // };


  return (
    <div className="App">
      <Router>
            <header>
            <button onClick={() => alert('Going back...')}>
              &larr;
            </button>
            <h1>Recent Transactions</h1>
            <button className="add-transaction-button" onClick={openModal}>
              + Add Transaction
            </button>
          </header>
          <Switch>
          <Route path="/allTransactions" component ={ShowTransactions}></Route>
              <Route path="/addTransaction" component ={AddTransactionForm}></Route>
              {/* <ShowTransactions transactions={transactions} onUpdateTransaction={openUpdateModal} />
              <AddTransactionForm
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                onSubmit={handleAddTransaction}
              />
              <UpdateTransactionForm
                isOpen={updateModalIsOpen}
                onRequestClose={closeUpdateModal}
                onSubmit={handleUpdateTransaction}
                transaction={transactionToUpdate}
              /> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
