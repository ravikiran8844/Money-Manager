import React, {Component} from 'react'
import './index.css'

export default class MoneyDetails extends Component {
  render() {
    return (
      <div className="moneyContainer">
        <div className="moneyCard balance">
          <div>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div>
            <p>Your Balance</p>
            <p>Rs 0</p>
          </div>
        </div>
        <div className="moneyCard income">
          <div>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div>
            <p>Your Income</p>
            <p>Rs 0</p>
          </div>
        </div>
        <div className="moneyCard expenses">
          <div>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
            />
          </div>
          <div>
            <p>Your Expenses</p>
            <p>Rs 0</p>
          </div>
        </div>
      </div>
    )
  }
}
