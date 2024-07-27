// src/UpdateTransactionForm.js
import React, { useState, useEffect, Component } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

Modal.setAppElement('#root');

class UpdateTransactionForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      dateOfTransaction: '',
      tag: '',
      description: '',
      amount: ''
    }
    this.changeDateOfTransactionHandler = this.changeDateOfTransactionHandler.bind(this);
    this.changeTagHandler = this.changeTagHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeAmountHandler = this.changeAmountHandler.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
  
  }
  saveTransaction =  (e) => {
    e.preventDefautlt();
    let transaction = {dateOfTransaction: this.state.dateOfTransaction,
      tag: this.state.tag,
      description: this.state.description,
      amount: this.state.amount};
  }
  
  render() {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal">
      <h2>Update Transaction</h2>
      <form onSubmit={handleSubmit}>
        <DatePicker
          selected={formData.dateOfTransaction ? parseISO(formData.dateOfTransaction) : null}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          className="date-picker"
          required
        />
        <select name="tag" value={formData.category} onChange={handleInputChange} onClick={clearField} required>
          <option value="" disabled>Select Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Income">Income</option>
          <option value="Utilities">Utilities</option>
          {/* Add more categories as needed */}
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onClick={clearField}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onClick={clearField}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Transaction</button>
      </form>
    </Modal>
    );
  }
}

export default UpdateTransactionForm;