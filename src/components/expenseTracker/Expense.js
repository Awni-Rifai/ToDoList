import React, { Component } from "react";

import "./Expense.css";

class Expense extends Component {
    state={
        showAddIncome:false,
        showAddExpense:false,
        sum:0,
    }
    showAddIncomeHandler=()=>{
        this.setState({
            showAddIncome:true
        })

    }
    showAddExpenseHandler=()=>{
        this.setState({
            showAddExpense:true,
            showAddIncome:false
        })

    }
    showAddIncomeHandler=()=>{
        this.setState({
            showAddIncome:true,
            showAddExpense:false,
        })

    }
  
  render() {
    return (
      <>
      <section className="Expense">
          <h1>Expense Tracker</h1>
         <div className="Expense__btns">
         <button onClick={this.showAddIncomeHandler}>Add income</button>
          <button onClick={this.showAddExpenseHandler}>Add expense</button>
         </div>

         <div
         style={{
          display:this.state.showAddIncome?'block':'none'
          }}
          
          className="Expense__income__group">
         <input type="text"placeholder="add income" className="Expense__input income" />
         <button className="Expense__add__income">add</button>
             
         </div>
         <div
          style={{
            display:this.state.showAddExpense?'block':'none'
            }}
          className="Expense__expense__group">
         <input type="text" placeholder="add expense" className="Expense__input" />
         <button className="Expense__add__expense">add</button>
             
         </div>


         <div className="Expense__total">
            {this.state.sum}
         </div>


      

      </section>
       
      </>
    );
  }
}
export default Expense;
