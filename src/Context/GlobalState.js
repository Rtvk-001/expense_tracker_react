import React,{createContext,useReducer} from "react";
import AppReducer from "../Context/AppReducer.js"

//initial state
const initialState= {
    trasactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

//Creating context
export const GlobalContext= createContext(initialState);

//Providing component
export const GlobalProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(id){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });
    }
    
    return(
        <GlobalContext.Provider value={{
            trasactions: state.trasactions,
                         deleteTransaction,
                         addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    );
}