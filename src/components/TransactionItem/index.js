import React from 'react'
import './index.css'

const TransactionItem = props => {
  const details = {props}
  const {type, amount, id, title} = details
  console.log(type, amount, id, title)

  return (
    <li className="textbold">
      <p>{title}</p>
      <p>{amount}</p>
      <div className="deleteItem">
        <p>{type}</p>
        <div>
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default TransactionItem
