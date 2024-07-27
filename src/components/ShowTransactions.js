import React, { Component } from 'react';
import TransactionService from '../Services/TransactionService';
class ShowTransactions extends Component {
  constructor(props){
    super(props)
    this.state={
      transactions: [],
      
    }
    this.updateTransaction = this.updateTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }
  updateTransaction(id){
    this.props.history.push(`/update-employee/${id}`);
  }
  deleteTransaction(id){
      TransactionService.deleteTransaction(id).then(res =>{
          this.setState({transactions:this.state.transactions.filter(transaction => transaction.id !==id)});
      });
  }
  componentDidMount(){
        TransactionService.getTransactions()
        .then((res) => {
          this.setState({transactions: res.data});
        });
  }
  render() {
    const { onUpdateTransaction  } = this.props;
    return (
      
      <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.dateOfTransaction}</td>
              <td>{transaction.tag}</td>
              <td>{transaction.description}</td>
              <td className={`amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                {transaction.amount}
                <button className="view-button" onClick={() => alert(`Viewing transaction: ${transaction.description}`)}>
                  View Transaction
                </button>
                <button className="update-button" onClick={() => this.updateTransaction(transaction.id)}>
                  Update Transaction
                </button>
                <button className="delete-button" 
                onClick={() => this.deleteTransaction(transaction.id)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
}

export default ShowTransactions;