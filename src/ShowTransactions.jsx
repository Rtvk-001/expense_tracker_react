import React, { useState, useEffect } from 'react';
import { supabase } from './createClient.js';
import './CSS/ShowTransactions.css';

const ShowTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    amount: '',
    tag: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    try {
      const { data, error } = await supabase
        .from('transaction_log')
        .select('*');

      if (error) {
        console.error('Error fetching transactions:', error.message);
      } else {
        setTransactions(data);
      }
    } catch (error) {
      console.error('Unexpected error:', error.message);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTransaction(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function createTransaction(event) {
    event.preventDefault();
    try {
      const { error } = await supabase
        .from('transaction_log')
        .insert([newTransaction]);

      if (error) {
        console.error('Error creating transaction:', error.message);
      } else {
        fetchTransactions();
        setShowDialog(false);
        setNewTransaction({ amount: '', tag: '', description: '', date: '' });
      }
    } catch (error) {
      console.error('Unexpected error:', error.message);
    }
  }

  async function updateTransaction(id) {
    // Implement update logic here
  }

  async function deleteTransaction(id) {
    try {
      const { error } = await supabase
        .from('transaction_log')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting transaction:', error.message);
      } else {
        fetchTransactions();
      }
    } catch (error) {
      console.error('Unexpected error:', error.message);
    }
  }

  return (
    <div className="show-transactions">
      <nav className="navbar">
        <button className="back-button">&larr;</button>
        <h1>Recent Transactions</h1>
        <button className="add-button" onClick={() => setShowDialog(true)}>+</button>
      </nav>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Amount</th>
            <th>Tag</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className="table-row">
              <td>{index + 1}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.tag || 'NA'}</td>
              <td>{transaction.description || 'NA'}</td>
              <td>{transaction.date}</td>
              <td className="actions">
                <button className="update-button" onClick={() => updateTransaction(transaction.id)}>Update</button>
                <button className="delete-button" onClick={() => deleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDialog && (
        <div className="dialog">
          <form onSubmit={createTransaction}>
            <label>
              Amount:
              <input type="number" name="amount" value={newTransaction.amount} onChange={handleInputChange} required />
            </label>
            <label>
              Tag:
              <input type="text" name="tag" value={newTransaction.tag} onChange={handleInputChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={newTransaction.description} onChange={handleInputChange} />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={newTransaction.date} onChange={handleInputChange} required />
            </label>
            <div className="dialog-actions">
              <button type="submit" className="save-button">Save</button>
              <button type="button" className="cancel-button" onClick={() => setShowDialog(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ShowTransactions;
