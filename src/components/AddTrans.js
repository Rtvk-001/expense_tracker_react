import React,{useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
const AddTrans = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);
  
  const onSubmit=e => {
    e.preventDefault();

    const newTransaction={
        id: Math.floor(Math.random()*10000000),
        text,
        amount: +amount
    }
    
    addTransaction(newTransaction);
  }

  return (
    <>
        <h3>
            Add new transaction
        </h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlfor="text">
                    Text
                </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here"/>
            </div>
            <div className="form-control">
                <label htmlfor="amount">
                    Amount <br/> (negative-expense,positive-income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter Amount here"/>
            </div>
            <button className="btn">
                Add Transaction
            </button>

        </form>
    </>
  )
}

export default AddTrans