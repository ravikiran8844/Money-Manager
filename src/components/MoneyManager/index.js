import React, {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

export default class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  getTitleInput = e => {
    this.setState({titleInput: e.target.value})
  }

  getAmountInput = e => {
    this.setState({amountInput: e.target.value})
  }

  getOptionId = e => {
    this.setState({optionId: e.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: optionId,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {optionId, amountInput, transactionsList, titleInput} = this.state
    console.log(transactionsList)
    return (
      <div className="container">
        <div className="headerCard">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transactionContainer">
          <div className="transaction">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                onChange={this.getTitleInput}
                id="title"
                value={titleInput}
                placeholder="TITLE"
                type="text"
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                value={amountInput}
                onChange={this.getAmountInput}
                id="amount"
                placeholder="AMOUNT"
                type="text"
              />
              <br />
              <label htmlFor="amount">TYPE</label>
              <br />
              <select onChange={this.getOptionId}>
                value={optionId}
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <br />
              <button onClick={this.addTransaction}>Add</button>
            </form>
          </div>
          <div className="transactionHistory">
            <h1>History</h1>
            <ul>
              <li className="textbold">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              <TransactionItem />
              {transactionsList.map(each => (
                <TransactionItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
