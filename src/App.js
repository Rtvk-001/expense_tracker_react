import Header from "../src/components/Header.js"
import Balance from "../src/components/Balance.js"
import IncomeExpenses from "../src/components/IncomeExpenses.js"
import "../src/App.css"
import TransList from "./components/TransList.js"
import AddTrans from "./components/AddTrans.js"
import { GlobalProvider } from "./Context/GlobalState.js"


function App(){
    return(
        <>
          <GlobalProvider>
            <Header/>
            <div className="container">
              <Balance/>
              <IncomeExpenses/>
              <TransList/>
              <AddTrans/>
            </div>
          </GlobalProvider>
          
        </>
    );
}

export default App