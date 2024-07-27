import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';


class AddTransactionForm extends Component {
  constructor(props){
    super(props)
      this.state =
      {
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
    let transaction= {dateOfTransaction:this.state.dateOfTransaction,
                    tag: this.state.tag,
                    description: this.state.description,
                    amount: this.state.amount
    }
    console.log('transaction => ' + JSON.stringify(transaction));
  }
  changeDateOfTransactionHandler = (event) => {
    this.setState({dateOfTransaction:event.target.value});
  }
  changeTagHandler = (event) => {
    this.setState({tag:event.target.value});
  }
  changeDescriptionHandler = (event) => {
    this.setState({description:event.target.value});
  }
  changeAmountHandler = (event) => {
    this.setState({amount:event.target.value});
  }
  cancel()
  {
    this.props.history.push('/allTransactions');
  }
  render() {
    return (
      <div>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal">
              <h2>Add New Transaction</h2>
              <form onSubmit={handleSubmit}>
              
                <DatePicker
                  selected={formData.dateOfTransaction ? new Date(formData.dateOfTransaction) : null}
                  value = {this.state.dateOfTransaction}
                  onChange={this.changeDateOfTransactionHandler}
                  dateFormat="yyyy/MM/dd"
                  className="date-picker"
                  required
                />
                <input
                  type="text"
                  name="tag"
                  placeholder="Category"
                  value={this.state.tag}
                  onChange={this.changeTagHandler}
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.changeDescriptionHandler}
                  required
                />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.changeAmountHandler}
                  required
                />
                <button type="submit" onSubmit={this.add}>Add Transaction</button>
              </form>
            </Modal>
      </div>
    );
  }
}

export default AddTransactionForm;




  